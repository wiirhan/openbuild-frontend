'use client'

import TalentsBannerPic from 'public/images/talents-banner.jpeg'
import { Button } from '@/components/Button'
import { ShillingFilters } from './Filters'
import { useUser } from '#/state/application/hooks'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CompleteProfileDialogWidget from '#/domain/profile/widgets/complete-profile-dialog'

export function Banner() {
  const user = useUser()
  const [needOpen, setNeedOpen] = useState(false)
  const [notBindWallet, setNotBindWallet] = useState(false)
  const [notComplete, setNotComplete] = useState(false)
  const router = useRouter()

  const link = () => {
    if (
      user?.base.user_nick_name === '' ||
      !user?.binds.find(f => f.auth_user_bind_type === 'wallet') ||
      user?.base.user_skills.length === 0 ||
      typeof user?.base.user_roles !== 'number'
    ) {
      setNeedOpen(true)
      if (!user?.binds.find(f => f.auth_user_bind_type === 'wallet')) {
        setNotBindWallet(true)
      }
      if (user?.base.user_nick_name === '' || user?.base.user_skills.length === 0) {
        setNotComplete(true)
      }
    } else {
      router.push('/shilling-myself')
    }
  }
  return (
    <div
      style={{ backgroundImage: `url(${TalentsBannerPic.src})` }}
      className="relative flex h-[360px] flex-col items-center bg-cover bg-center bg-no-repeat py-9"
    >
      <p className="text-lg">OpenBuild SkillHub</p>
      <h1 className="mt-2 max-w-[766px] text-center text-[40px] leading-[48px]">
        Find talents with the necessary skills to help you build in Web3
      </h1>
      <Button onClick={link} className="mt-4 mb-9 w-[168px]" variant="contained">
        Shilling Myself
      </Button>
      <CompleteProfileDialogWidget notBindWallet={notBindWallet} notComplete={notComplete} open={needOpen} close={() => setNeedOpen(false)} title="Before applying, you need to:" />
      <ShillingFilters />
    </div>
  )
}
