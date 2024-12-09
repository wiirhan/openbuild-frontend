import { classNames } from '@/utils'

export const ProgressBar = ({ progress, className, hasNum, mainClassname }) => {
  return (
    <div className={classNames('flex flex-1 items-center gap-2', mainClassname)}>
      <div className={classNames('flex h-1 flex-grow overflow-hidden rounded-full bg-[#E9E9E9]', className)}>
        <div
          className={classNames(
            'from-pink-red to-pink flex h-full justify-end rounded-r-full',
            progress >= 100 ? 'bg-green' : 'bg-yellow-50'
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
      {}
      {hasNum && <p className="text-xs opacity-80">{progress}%</p>}
    </div>
  )
}
