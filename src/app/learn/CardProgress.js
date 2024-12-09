'use client'

import { ArrowRightIcon } from '@/components/Icons'
import { ProgressBar } from '@/components/ProgressBar'

export function CardProgress({ value }) {
  return (
    <div className="flex items-center justify-between p-6">
      <div>
        <h6 className="mb-3 text-sm font-bold">
          Progress
          <span className="ml-2 font-normal">{value}%</span>
        </h6>
        <div className="min-w-[160px]">
          <ProgressBar progress={value} />
        </div>
      </div>
      <ArrowRightIcon className="h-3 w-[18px]" />
    </div>
  )
}
