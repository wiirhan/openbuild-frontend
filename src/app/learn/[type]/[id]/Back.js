'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export function Back({params}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const toPath = useMemo(() => {
    return {
      name: searchParams.get('from'),
      id: searchParams.get('fromid'),
    }
  } ,[searchParams])

  return (
    <div onClick={() => {
      if (params.type === 'challenges') {
        router.push('/learn/challenges')
      } else {
        if (toPath.name === 'career_path') {
          router.push(`/learn/career_path/${toPath.id}`)
        } else {
          router.push('/learn/courses')
        }
      }
    }} className="flex cursor-pointer items-center hover:opacity-80">
      <ArrowLeftIcon className="h-5" />
      <span className="ml-3 text-sm">
        Back <span className="max-md:hidden"> to&nbsp;
        {(toPath.name === 'career_path' || params.type === 'career_path') ? 'Career path' : params.type}
      </span>
      </span>
    </div>
  )
}