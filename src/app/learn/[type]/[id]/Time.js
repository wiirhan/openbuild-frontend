'use client'
import { formatTime } from '@/utils/date'
import { ChallengesStatus } from '../ChallengesStatus'

export function ChallengesTime({ data }) {
  // console.log(data?.challenges_extra.course_challenges_extra_start_date)
  // console.log(data?.challenges_extra.course_challenges_extra_end_date)
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm opacity-80">
          {formatTime(data?.challenges_extra.course_challenges_extra_start_date * 1000)}&nbsp;-&nbsp;
          {formatTime(data?.challenges_extra.course_challenges_extra_end_date * 1000)}
          {data.challenges_extra.course_challenges_extra_time_zone?.label?.substr(0, 11) && <span className="text-xs bg-gray-400 ml-1 px-1 rounded-md h-4 opacity-70 py-[2px]">{data.challenges_extra.course_challenges_extra_time_zone?.label?.substr(0, 11)}</span>}
        </p>
      </div>
      {data && <ChallengesStatus data={data} />}
    </div>
  )
}
