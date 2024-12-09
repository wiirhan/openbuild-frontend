'use client'

import { NoData } from '@/components/NoData'
import { BountyList} from './BountyList'
import { Search } from './Search'
import { CommonListSkeleton } from '@/components/Skeleton/CommonListSkeleton'
import { OPagination } from '@/components/Pagination'
import { PAGE_SIZE } from '@/constants/config'
import useSWR from 'swr'
import { fetcher } from '@/utils/request'

export default function Page({ searchParams }) {
  const page = Number(searchParams?.page) || 1
  const status = searchParams?.status || ''
  const query = searchParams?.query || ''
  const url = `ts/v1/build/creator/bounties?skip=${(page - 1) * PAGE_SIZE}&take=${PAGE_SIZE}&status=${status}&title=${query}&sort_by=latest`
  const { data, isLoading, mutate } = useSWR(url, fetcher)

  return <div className="flex-1 p-8">
    <Search />
    <BountyList data={data} mutate={mutate} />
    {isLoading && <CommonListSkeleton />}
    {data?.total === 0 && !isLoading && (
      <div className="flex justify-center min-h-[300px] items-center">
        <NoData />
      </div>
    )}
    {data && <div className="flex justify-end mt-4">
      <OPagination total={data?.total} />
    </div>}

  </div>
}
