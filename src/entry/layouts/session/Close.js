'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
export function Close() {
  return (
    <div
      onClick={() => window.history.back()}
      className="absolute top-6 right-9 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#F1F1F1] hover:border-gray md:flex"
    >
      <XMarkIcon className="h-5 w-5" />
    </div>
  )
}
