'use client'

export function CommonListSkeleton({height = 60}) {
  return (
    <div>
     {new Array(6).fill(',').map((i, k) => (
        <div key={`ListSkeleton-${k}`}>
          <div className="skeleton rounded-lg mb-4">
            <div className={`h-[${height}px] w-full`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}