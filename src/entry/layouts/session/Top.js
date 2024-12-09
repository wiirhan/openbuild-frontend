'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import QuickAuthWidget from '#/domain/auth/widgets/quick-auth'

const descs = {
  signin: {
    title: 'Sign In',
    text: 'Welcome back! Let\'s take you to your account',
  },
  signup: {
    title: 'Sign Up',
    text: 'For better interaction, please bind your email address',
  },
  forgot: {
    title: 'Forgot Password?',
    text: 'Enter your email address below and we will send you alink to reset your password',
  },
  change: {
    title: 'Change Password',
    text: 'Enter your email address below and we will send you alink to reset your password',
  },
  reset: {
    title: 'Reset Password',
    text: 'Enter and confirm your new password below',
  },
}
export function UCTop() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentPage = useMemo(() => pathname.split('/')[1], [pathname])
  const from = useMemo(() => searchParams?.get('from') || '/profile', [searchParams])

  return (
    <>
      {(currentPage.includes('forgot') || currentPage.includes('change')) && (
        <h1 className="mt-6 text-lg font-bold">{descs[currentPage].title}</h1>
      )}
      <p className="mt-4 mb-4 text-sm opacity-40">{descs[currentPage].text}</p>
      {(currentPage.includes('signin') || currentPage.includes('signup')) && (
        <>
          <QuickAuthWidget pathname={[pathname]} search={searchParams} from={from} />
          <div className="my-6 h-[2px] bg-[#F1F1F1]"></div>
        </>
      )}
    </>
  )
}
