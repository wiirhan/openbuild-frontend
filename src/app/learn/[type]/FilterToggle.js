'use client'

import { useAppDispatch } from '#/state/hooks'
import { useOpenFilter } from '#/state/application/hooks'
import { updateOpenFilter } from '#/state/application/reducer'
import { FilterIcon } from '@/components/Icons'

export function FilterToggle({type, count}) {
  const openFilter = useOpenFilter()
  const dispatch = useAppDispatch()

  return (
    <div className="mt-4 flex items-center text-sm md:mt-0">
      {!openFilter && type !== 'career_path' && (
        <span
          onClick={() => dispatch(updateOpenFilter(true))}
          className="mr-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-600 hover:border-gray-500 md:flex"
        >
          <FilterIcon className="h-4 w-4 text-gray-500" />
        </span>
      )}
      <strong className="mr-1">{count}</strong>
      {type === 'career_path' ? 'courses' : type} available
    </div>
  )
}
