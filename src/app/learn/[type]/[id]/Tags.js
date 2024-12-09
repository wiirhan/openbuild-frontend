'use client'
import { ChallengesStatus } from '../ChallengesStatus'

import { typeStyle, useTags } from '../ChallengesCard'


export function ChallengesTags({ data }) {
  const tags = useTags(data)
  return (
    <div className="flex">
      {data && <ChallengesStatus data={data} />}
      {tags.map((t, i) => (
        <span key={`learn-card-tag-${i}`} className={typeStyle}>
          {t}
        </span>
      ))}
    </div>
  )
}