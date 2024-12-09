'use client'

import { get } from '@/utils/request'

import { useSession, signOut } from 'next-auth/react'
import { useAppDispatch } from '#/state/hooks'
import { updateUser } from '#/state/application/reducer'
import { useEffect } from 'react'

export default function UserUpdater() {
  const dispatch = useAppDispatch()
  const { status } = useSession()
  useEffect(() => {
    const fetchUser = async () => {
      if (status === 'authenticated') {
        const data = await get('ts/v1/user/info')
        // console.log(data)
        // debugger
        if (data && data.code === 200) {
          dispatch(updateUser(data.data))
        } else if(data?.code === 401) {
          dispatch(updateUser(null))
          signOut()
        }
      }

    }
    fetchUser()

  }, [dispatch, status])
  return null
}
