'use client'

import Link from 'next/link'

function LockedPlaceholder({ id, type }) {
  return (
    <div className="flex-1 pt-[30px] lg:border-l lg:border-gray-400 lg:px-14">
      <div className="mb-2 items-center justify-between lg:flex">
        <p>The chapter is not unlocked, <Link className="font-bold uppercase" href={`/learn/${type}/${id}`}>return back</Link>.</p>
      </div>
    </div>
  )
}

export default LockedPlaceholder
