'use client'

import { useMemo } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Pagination } from '@nextui-org/pagination';

import { PAGE_SIZE } from '../../constants/config'
import { Button } from '../Button'

export function OPagination({ total, changeCallback }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const currentPage = useMemo(() => {
    return Number(searchParams?.get('page')) || 1
  }, [searchParams])

  const change = (pageNumber) => {
    if (!changeCallback) {
      const params = new URLSearchParams(searchParams)
      params.set('page', pageNumber.toString())
      replace(`${pathname}?${params.toString()}`)
    } else {
      changeCallback(pageNumber)
    }

  };

  const totalPage = useMemo(() => {
    return Math.ceil(total / PAGE_SIZE)
  }, [total])

  const textItemRender = (current, type, element) => {
    if (type === 'prev' && current !== 0) {
      return 'Previous';
    }
    if (type === 'next') {
      return 'Next';
    }
    return element;
  };

  <Pagination total={100} itemRender={textItemRender} />

  return total > 0 ? (
    <div className="flex justify-end">
      <div className="flex mt-4">
        {
          currentPage > 1 && <Button
            variant="light"
            className="mr-2 h-9"
            disabled={currentPage <= 1}
            onClick={() => change(currentPage > 1 && currentPage - 1)}
          >
            Previous
          </Button>
        }
        <Pagination
          classNames={{ wrapper: 'gap-1', item: 'bg-transparent shadow-none' }}
          total={totalPage}
          initialPage={currentPage}
          page={currentPage}
          onChange={(page) => change(page)}
        />
        <Button
          variant="light"
          disabled={currentPage >= totalPage}
          className="ml-2 h-9"
          onClick={() => change(currentPage < totalPage && currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  ) : null
}
