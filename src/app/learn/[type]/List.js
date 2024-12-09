'use client'
import { useOpenFilter } from '#/state/application/hooks'
import clsx from 'clsx'

import { CourseCard } from './CourseCard'
import { ChallengesCard } from './ChallengesCard'
import { GrowPathCard } from './GrowPathCard'
import { OPagination } from '@/components/Pagination'

export function List({type, data}) {
  const openFilter = useOpenFilter()
  // console.log(data, 'datadatadatadata')
  return (
    <div>
      <div
        className={clsx('mb-9 mt-6 grid gap-5 md:grid-cols-3', {
          'lg:grid-cols-2': openFilter,
          'lg:grid-cols-3': !openFilter,
          'xl:grid-cols-3': openFilter,
          'xl:grid-cols-4': !openFilter,
          '3xl:grid-cols-4': openFilter,
          '3xl:grid-cols-5': !openFilter,
        })}
      >
        {type === 'courses' && data.list?.map(i => <CourseCard data={i} key={`open-courses-${i.base.course_series_id}`} />)}
        {type === 'challenges' &&
          data.list?.map(i => <ChallengesCard data={i} key={`Challenges-${i.base.course_series_id}`} />)}
        {type === 'career_path' &&
          data.list?.map(i => <GrowPathCard data={i} key={`GrowPathCard-${i.base.course_series_id}`} />)}
      </div>
      <OPagination total={data.count} />
    </div>
  )
}
