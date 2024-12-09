import { useState } from 'react'

import { ReactSelect } from '@/components/Select/ReactSelect'

import TabBar from '../tab-bar'

const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Experiences', value: 'experiences' },
]

function ActivityTabList({ userId, tabs }) {
  const [activity, setActivity] = useState(0)
  const [sort, setSort] = useState()

  const ActivityList = tabs[activity].view
  const params = { userId, sort: sort?.value }

  return (
    <>
      <div className="flex flex-col justify-between pt-9 pb-6 md:flex-row">
        <TabBar
          tabs={tabs.map(({ text, node }) => node ? { text, node } : text)}
          tabClassName="h-14 md:h-9 md:!px-6"
          current={activity}
          onChange={setActivity}
        />
        <div className="flex gap-3 mt-6 md:mt-0">
          <ReactSelect
            id="learn-order-select"
            isClearable
            value={sort}
            isSearchable={false}
            className="w-full no-bg showDropdownIndicator bg-transparent md:w-[200px]"
            onChange={setSort}
            options={sortOptions}
            placeholder={'Sort by'}
          />
        </div>
      </div>
      {ActivityList && <ActivityList params={params} />}
    </>
  )
}

export default ActivityTabList
