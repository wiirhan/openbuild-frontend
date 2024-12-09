'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { bindOAuth } from '#/services/auth'
import Loader from '@/components/Loader'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Bind({ params }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    const code = searchParams?.get('code')
    if (searchParams && router && status !== 'authenticated') {
      if (code && params.type) {
        window.localStorage.setItem('signType', params.type)
        const redirectUri = `${window.location.origin}/bind/${params.type}`
        bindOAuth(code, params.type, redirectUri)
          .then(async res => {
            if (res.code === 200) {
              if (status !== 'authenticated') {
                await signIn('credentials', {
                  token: res.data.token,
                })
              }
              let from
              if (params.type === 'google' || params.type === 'aspecta') {
                from = searchParams?.get('state')
              } else {
                from = searchParams?.get('from')
              }
              window.location.href = window.location.origin + from
            } else {
              toast.error(res.message)
            }
            if (res.code === 401) {
              signOut()
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader color={'#1a1a1a'} />
      <p className="ml-2">Logging in</p>
    </div>
  )
}
