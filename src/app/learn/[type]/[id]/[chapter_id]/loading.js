'use client'

export default function Loading() {
  return <div className="mx-auto px-6 lg:flex">
  <div className="max-lg:hidden w-[308px] pt-9 pr-6 max-lg:fixed max-lg:top-[85px] max-lg:left-0 max-lg:z-20 max-lg:h-[100%] max-lg:w-full max-lg:bg-white max-lg:px-4 max-lg:pt-0 lg:sticky">
    <div className="skeleton rounded-lg mb-4">
      <div className="rounded-lg h-[400px] w-[100%]"></div>
    </div>
  </div>
  <div className="flex-1 pt-[30px] lg:border-l lg:border-gray-400 lg:px-14 mb-14">
    <div className="skeleton rounded-lg mb-6">
      <div className="rounded-lg h-[40px] w-[100%]"></div>
    </div>
    <div className="skeleton rounded-lg">
      <div className="rounded-lg h-[500px] w-[100%]"></div>
    </div>
  </div>
</div>
}