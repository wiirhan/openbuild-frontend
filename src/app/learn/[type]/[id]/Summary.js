'use client'

import ContentEditable from 'react-contenteditable'
import { HTMLDecode } from '@/utils'
import clsx from 'clsx'

export function Title({data, type}) {
  return <h3 className="my-6 text-[36px] font-bold leading-9 md:text-[36px] md:leading-[48px]">
    <ContentEditable
      html={HTMLDecode ? HTMLDecode(type === 'GrowPath' ? data?.title : data?.base?.course_series_title) : ''} // innerHTML of the editable div
      disabled={true}
    />
  </h3>
}

export function Summary({data, type}) {
  return (
    <div className={clsx('mt-6 rounded text-base', {
      'bg-[#f0f0f0] p-6': type !== 'career_path'
    })}>
      <ContentEditable
        html={HTMLDecode ? HTMLDecode(data?.base?.course_series_summary): ''} // innerHTML of the editable div
        disabled={true}
      />
    </div>
  )
}
