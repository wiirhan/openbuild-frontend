import { Search } from '../learn/[type]/Search'
import { Sort } from '../learn/[type]/Sort'
import { FilterToggle } from '../learn/[type]/FilterToggle'
import { List } from './List'

import { NoData } from '@/components/NoData'
import { get } from '@/utils/request'
import { PAGE_SIZE } from '@/constants/config'


export async function Container({ type, searchParams }) {
  const page = Number(searchParams?.page) || 1
  const order = searchParams?.order || 'default'
  const labels = searchParams?.labels || ''
  const query = searchParams?.query || ''
  const status = searchParams?.status || ''
  const skills = searchParams?.skills || ''
  const URL = `ts/v1/build/general/bounties?ecosystem=${labels}&skip=${(page - 1) * PAGE_SIZE}&take=${PAGE_SIZE}&title=${query}&status=${status}&skills=${skills}&sort_by=${order}`
  const { data } = await get(URL, {isServer: true})
  // console.log(data)
  return (
    <div className="flex-1 pb-14">
      <div className="flex flex-col-reverse justify-between md:flex-row md:items-center">
        <FilterToggle type={type} count={data?.total} />
        <div className="flex items-center">
          <Search />
          <Sort />
        </div>
      </div>
      {data?.total === 0 ? <NoData /> : <List type={type} data={data} />}
    </div>
  )
}
