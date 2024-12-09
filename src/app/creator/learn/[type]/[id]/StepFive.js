'use client'

import dynamic from 'next/dynamic'

const SurveyContainer = dynamic(() => import('./SurveyContainer'), {
  ssr: false,
})
export function CreatorLearnStepFive({ id, type, data, change }) {
  return (
    <div id="creator-five">
      <SurveyContainer id={id} type={type} data={data} change={change} />
    </div>
  )
}
