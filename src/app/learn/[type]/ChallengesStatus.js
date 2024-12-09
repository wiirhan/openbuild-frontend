'use client'

export function ChallengesStatus({ data }) {
  return (
    <div className="mr-1">
      {data?.challenges_extra.course_challenges_extra_time_order === 2 && (
        <span
          className="bg-[rgba(96,202,152,0.12)] h-6 flex items-center rounded-[6px] px-2 text-xs border border-[#60CA98] text-[#60CA98]"
        >
          Ongoing
        </span>
      )}
      {data?.challenges_extra.course_challenges_extra_time_order === 1 && (
        <span
          className="bg-[rgba(220,178,89,0.12)] h-6 flex items-center rounded-[6px] px-2 text-xs border border-[#DCB259] text-[#DCB259]"
        >
          Soon
        </span>
      )}
      {data?.challenges_extra.course_challenges_extra_time_order === 0 && (
        <span
          className="bg-[rgba(130,173,216,0.12)] h-6 flex items-center rounded-[6px] px-2 text-xs border border-[#82ADD8] text-[#82ADD8]"
        >
          Closed
        </span>
      )}
    </div>
  )
}