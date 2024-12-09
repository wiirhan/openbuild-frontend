'use client'

import { formatTime } from '@/utils/date'
import Avatar from '@/components/Avatar'

export function Author({ data }) {
  return (
    <div className="flex justify-between pb-6 mt-6">
      <div className="flex items-center" suppressHydrationWarning>
        <Avatar size={56} user={data?.team_user} />
        <div className="ml-4">
          <h4 className="text-sm font-bold md:text-lg">
            <a href={`/u/${data?.team_user?.user_handle}`}>{data?.team_user?.user_nick_name}</a>
          </h4>
          <p className="text-xs text-gray-500 md:text-sm">
            Posted on <span className="text-gray-50">{formatTime(Number(data?.base?.cs_created_at) * 1000, 'MMM D, YYYY HH:mm')}</span> · Latest update on{' '}
            <span className="text-gray-50">{formatTime(data?.base?.cs_updated_at * 1000, 'MMM D, YYYY')}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
