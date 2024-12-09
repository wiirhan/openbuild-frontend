'use client'

import { BindEmailModal } from './BindEmailModal'
import { useUser } from '#/state/application/hooks'
import { useEffect } from 'react'
import { useModalOpen, useBindEmailModalToggle } from '#/state/application/hooks'
import { setOpenModal } from '#/state/application/reducer'
import { useSession } from 'next-auth/react'
import { useAppDispatch } from '#/state/hooks'
import { usePathname } from 'next/navigation'

export function LayoutModals() {
  const pathname = usePathname()
  const { status } = useSession()
  const bindEmailModalToggle = useBindEmailModalToggle()
  const modalOpen = useModalOpen('BIND_EMAIL')
  const user = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isLandingPage = pathname === '/'
    const isSign = pathname?.includes('signin') || pathname?.includes('signup')
    const bindEmail = user?.binds.find(f => f.auth_user_bind_type === 'email')
    if (user !== null && !isLandingPage && !isSign) {
      if (!bindEmail && status === 'authenticated') {
        !modalOpen && bindEmailModalToggle()
      } else {
        dispatch(setOpenModal(false))
      }
    }
  }, [user, bindEmailModalToggle, modalOpen, status, dispatch, pathname])

  return (
    <div>
      <BindEmailModal />
    </div>
  )
}
