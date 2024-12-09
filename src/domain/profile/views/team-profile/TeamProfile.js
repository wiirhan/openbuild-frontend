import { useState } from 'react'

import PublishedCourseListView from '../../../course/views/published-course-list'
import PublishedChallengeListView from '../../../challenge/views/published-challenge-list'
import PublishedBountyListView from '../../../bounty/views/published-bounty-list'
import PublishedQuizListView from '../../../quiz/views/published-quiz-list'

import TabBarWidget from '../../widgets/tab-bar'
import SocialInfoWidget from '../../widgets/social-info'
import ActivityTabListWidget from '../../widgets/activity-tab-list'

import LatestActivityList from './LatestActivityList'

const tabs = [
  {
    text: 'Open Course',
    node: (
      <>
        <span className="inline md:hidden">Courses</span>
        <span className="hidden md:inline">Open Course</span>
      </>
    ),
    view: PublishedCourseListView,
  },
  {
    text: 'Challenges',
    node: (
      <>
        <span className="inline md:hidden">Challenge</span>
        <span className="hidden md:inline">Challenges</span>
      </>
    ),
    view: PublishedChallengeListView,
  },
  {
    text: 'Bounty',
    node: (
      <>
        <span className="inline md:hidden">Bounty</span>
        <span className="hidden md:inline">Bounty</span>
      </>
    ),
    view: PublishedBountyListView,
  },
  {
    text: 'Quiz',
    node: (
      <>
        <span className="inline md:hidden">Quiz</span>
        <span className="hidden md:inline">Quiz</span>
      </>
    ),
    view: PublishedQuizListView,
  },
]

function TeamProfileView({ data, activities }) {
  const [tabActive, setTabActive] = useState(1)

  const tabContent = [
    <SocialInfoWidget key="social" data={data} />,
    <LatestActivityList key="activity" activities={activities} />,
  ]

  return (
    <div className="md:pl-[410px] md:pb-14 md:pr-14">
      <TabBarWidget
        tabs={['Info', 'Activities']}
        tabClassName="h-14 md:h-9 md:w-[111px] md:first:hidden"
        current={tabActive}
        onChange={setTabActive}
      />
      {tabContent[tabActive]}
      <ActivityTabListWidget userId={data?.base.user_id} tabs={tabs} />
    </div>
  )
}

export default TeamProfileView