'use client'

import Link from 'next/link'
import { useUser } from '#/state/application/hooks'

import { Tabs } from './Tabs'

export default function Layout({ children }) {
  const user = useUser()

  return (
    <>
      {/* <Header /> */}
      {user?.roles.find(f => f.auth_user_roles_name === 'creator') ? (
        <div className="flex px-[68px] pb-10">
          <Tabs />
          {children}
        </div>
        ) : (
          <div className="text-center text-xl py-7">You have no permissions, go to <Link className="text-red-50 underline" href="/">home page</Link> to continue your journey please.</div>
        )}
      {/* <Footer /> */}
    </>
  )
}
