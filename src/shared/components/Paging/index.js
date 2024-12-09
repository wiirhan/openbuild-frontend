'use client'

import Pagination from 'rc-pagination'

export function Paging({ total, onChange, pageSize, page }) {
  const textItemRender = (current, type, element) => {
    if (type === 'prev') {
      return 'Prev'
    }
    if (type === 'next') {
      return 'Next'
    }
    return element
  }

  return (
    <Pagination
      current={page}
      pageSize={pageSize}
      onChange={onChange}
      className="flex justify-end [&>li]:cursor-pointer [&>li]:rounded-xl [&>li]:px-4 [&>li]:py-2 [&>.rc-pagination-item-active]:bg-black [&>.rc-pagination-item-active]:text-white [&>li:first-child]:hidden [&>.rc-pagination-options]:hidden [&>li.rc-pagination-next]:mx-3 [&>li.rc-pagination-next]:rounded-none [&>li.rc-pagination-next]:border-b [&>li.rc-pagination-next]:border-gray [&>li.rc-pagination-next]:px-0 [&>li>.rc-pagination-item-link:after]:content-['...'] [&>li.rc-pagination-disabled]:hidden"
      total={total}
      itemRender={textItemRender}
    />
  )
}
