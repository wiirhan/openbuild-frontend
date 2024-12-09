'use client'

import { useOpenFilter } from '#/state/application/hooks'
import clsx from 'clsx'

import { BountiesCard } from './Card'
import { OPagination } from '@/components/Pagination'

export function List({ data }) {
  const openFilter = useOpenFilter()
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
        {data?.list?.map(i => (
          <BountiesCard key={`BountiesCard-${i.id}`} data={i} />
        ))}
      </div>
      <OPagination total={data.total} />
    </div>
  )
}
