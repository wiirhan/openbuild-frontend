import { skeleton } from '@/constants/config'

export function Skeleton() {
  return (
    <div className="mx-auto max-md:px-4 md:pr-14 lg:flex 2xl:max-w-[1400px]">
      <div className="flex flex-1 justify-end border-gray-400 pt-6 md:border-r md:[&>div]:pr-14">
        <div className="w-full max-w-[1024px]">
          <div className={`mb-8 h-9 ${skeleton}`}></div>
          <div className={`mb-6 h-12 ${skeleton}`}></div>
          <div className={`mb-6 h-8 max-w-[240px] ${skeleton}`}></div>
          <div className={'my-8'}>
            <div className={`${skeleton} mb-4 h-[320px]`}></div>
          </div>
          <hr className="border-gray-400" />
          <div className={'my-8'}>
            <div className={`${skeleton} mb-4 h-14`}></div>
          </div>
          <hr className="mb-14 border-gray-400" />
          <div className={'my-8'}>
            <div className={`${skeleton} mb-4 h-[320px]`}></div>
          </div>
          <hr className="mb-14 border-gray-400" />
        </div>
      </div>
      <div className="ml-14 mt-[34px] hidden w-[320px] md:block">
        <div className={`${skeleton} h-[500px] w-[100%] rounded`}></div>
      </div>
    </div>
  )
}
