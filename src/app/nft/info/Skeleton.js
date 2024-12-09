import { skeleton } from '@/constants/config'

export function Skeleton() {
  return (
    <div className="flex py-6">
      <div className={`mr-4 h-[120px] rounded-full ${skeleton} !w-[120px]`}></div>
      <div className="bottom-3 flex-1 px-3">
        <div className={`mb-2 text-lg ${skeleton} h-[28px]`}></div>
        <p className="flex items-center text-[13px]">
          <span className={`mb-1 text-lg ${skeleton} h-[28px]`}></span>
        </p>
        <div className={`mt-5 ${skeleton} h-9 !w-[120px]`}></div>
      </div>
    </div>
  )
}
