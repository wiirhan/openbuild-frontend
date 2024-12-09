'use client'

import { OViewer } from '@/components/MarkDown'

export function LearnInfo({ data }) {
  return (
    <div
      id="learn-info"
      className="[&>div>a]:font-bold [&>div>a]:underline [&>div>*]:text-gray-50"
    >
      {data && <OViewer value={data?.base?.course_series_introduction} />}
    </div>
  )
}
