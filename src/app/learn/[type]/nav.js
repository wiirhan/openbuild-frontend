'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { LEARN_NAVS } from '#/lib/nav'
import { usePathname } from 'next/navigation'

export function LearnNavBar() {
  const pathname = usePathname()
  return (
    <div className="flex max-sm:justify-center">
      {LEARN_NAVS.map((i, k) => 
        <Link 
          className={
            clsx('px-6 py-[10px] flex items-center mb-6 rounded max-sm:text-sm max-sm:px-4 group opacity-60 hover:opacity-100 transition-all', {
              'bg-gray-400 !opacity-100': pathname.includes(i.link)
            })} 
          key={`learn_nav_${k}`} 
          href={i.link}>
          <Image src={i.icon} alt="" className="mr-2" />
          <span>{i.name}</span>
        </Link>
      )}
    </div>
  )
}