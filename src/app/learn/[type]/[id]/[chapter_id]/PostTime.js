'use client'
import useInterval from '@/hooks/useInterval'
import { uploadSingleProgress } from '#/services/learn'
import { useSession } from 'next-auth/react'

export function PostTime({ id }) {
  const { status } = useSession()
  useInterval(() => status === 'authenticated' && uploadSingleProgress(id), 10000)
  return <></>
}
