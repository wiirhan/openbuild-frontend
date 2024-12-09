import clsx from 'clsx'

import { SemiCircleProgress } from '@/components/ProgressBar/SemiCircleProgress'

import style from './style.module.scss'

function FeedbackScore({ score, passed }) {
  return (
    <div className={clsx(style.FeedbackScore, { [style['FeedbackScore--passed']]: passed })}>
      <h3 className="text-center text-lg">
        {passed ? (
          <>
            🎉 Congratulations 🎉
            <p>Passing the challenge</p>
          </>
        ) : (
          <>
            The challenge has not been passed,
            <p>please keep working hard! 💪🏻</p>
          </>
        )}
      </h3>
      <div className={clsx(style['FeedbackScore-score'], 'flex mt-6 justify-center')}>
        <div className="relative w-[180px]">
          <SemiCircleProgress stroke={passed ? '#01DB83' : '#E43150'} percentage={score} />
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] text-center">
            <h6 className="text-[36px] leading-[40px]">{score}</h6>
            <p className="opacity-60 text-sm">Scored</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackScore
