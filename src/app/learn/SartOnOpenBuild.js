'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import Link from 'next/link'
import TaskPic from 'public/images/svg/task.svg'

export function SartOnOpenBuild() {
  const { status } = useSession()
  return (
    <div className="md:flex justify-between bg-green max-md:pt-4 md:py-[30px] px-11 relative">
      <div className="flex flex-col">
        <p className="mb-6 text-center text-[20px] font-bold leading-6 md:text-left md:text-[31px] md:leading-9">
          Start Your Web3 Career with OpenBuild
        </p>
        <div className="flex max-md:justify-center">
          <Button
            variant="outlined"
            onClick={() => window.open('https://t.me/OpenBuildxyz/1')}
            className="mr-2 max-md:h-9 max-md:text-xs max-md:font-normal px-6 md:px-9 font-semibold hover:bg-transparent hover:opacity-80"
          >
            🎉 Join Community
          </Button>
          {status === 'unauthenticated' && <Link href="/signup">
            <Button className="mr-l max-md:!h-9 max-md:text-xs max-md:font-normal max-md:px-6 relative btn btn-primary text-white pl-9 pr-2 hover:!opacity-90">
              Sign Up
              <span className="max-md:hidden p-2 bg-white rounded ml-14">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12L12 1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.57143 1H12V10.4286" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Button>
          </Link>}
        </div>
      </div>

      <div className="max-md:flex max-md:justify-center max-md:mt-6">
        <Image className="w-[284px] md:absolute right-11 bottom-0" src={TaskPic} alt={''} />
      </div>
    </div>
  )
}
