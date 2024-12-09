'use client'

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function RouteIntercept() {
  const { status } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (
      status === 'unauthenticated' && 
      (pathname.includes('profile') || pathname.includes('dashboard') || pathname.includes('creator') || pathname.includes('shilling-myself'))
    ) {
      router.push(`/signin?from=${pathname}`)
    }
    // if (status === 'authenticated' && (pathname.startsWith('/signin') || pathname.startsWith('/signup'))) {
    //   router.push('/profile')
    // }
  }, [pathname, router, status])

  return null
}