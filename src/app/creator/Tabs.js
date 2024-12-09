'use client'

import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const menus = [
  {
    name: 'Learn',
    type: 'opencourse',
    children: [
      {
        name: 'Open Courses',
        key: '/learn/opencourse',
      },
      // {
      //   name: 'Career Certification',
      //   key: 'career',
      // },
      {
        name: 'Challenges',
        key: '/learn/challenges',
      },
    ],
  },
  {
    name: 'Build',
    type: 'build',
    children: [
      {
        name: 'Bounty',
        key: '/build/bounty',
      },
    ],
  },
  {
    name: 'Follows',
    type: 'Soon',
    children: [],
  },
]

export function Tabs() {
  const pathname = usePathname()

  return (
    pathname.includes('/creator/learn/challenges/') || pathname.includes('/creator/learn/opencourse/') ? <></> :
    <div className="mt-10 w-[300px] border-r border-gray-400 px-8">
      {menus.map((i, k) => (
        <Disclosure key={`creator-${i.name}`} defaultOpen={k === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx('flex w-full items-center justify-between', {
                  'mt-8': k !== 0,
                })}
              >
                <p className="text-lg font-bold text-gray">
                  {i.name}
                  {i.type === 'Soon' && (
                    <span className="ml-1 rounded-md bg-yellow-100 px-1 py-[2px] text-xs">Soon</span>
                  )}
                </p>

                {i.type !== 'Soon' && (
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 fill-gray-500 text-gray-500`}
                  />
                )}
              </Disclosure.Button>
              {i.type !== 'Soon' && (
                <Disclosure.Panel className="text-sm text-gray-500">
                  <ul className="mt-3 [&>a]:leading-8">
                    {i.children.map(j => (
                      <Link key={`creator-${i.name}-${j.name}`} href={`/creator${j.key}`}>
                        <li
                          className={clsx('border-l-2 border-gray-400 px-4 leading-10 ', {
                            '!border-gray font-bold text-gray': pathname?.includes(j.key),
                          })}
                        >
                          {j.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
