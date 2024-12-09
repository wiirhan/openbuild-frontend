import { useEffect } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import GoogleIcon from 'public/images/svg/google-line.png'
import { GithubIcon, WalletIcon } from '@/components/Icons'

import { authWithGoogle, authWithGithub } from '../../helper'
import useSignInWithWallet from '../../hooks/useSignInWithWallet'

const signInTypeMap = {
  web3: {
    name: 'Wallet',
    icon: <WalletIcon />,
  },
  google: {
    name: 'Google',
    icon: <Image width={16} height={16} src={GoogleIcon} alt="" />,
  },
  github: {
    name: 'GitHub',
    icon: <GithubIcon />,
  },
}

function QuickAuthWidget({ pathname, search, from }) {
  const { openConnectModal } = useConnectModal()
  const { isConnected, address } = useAccount()
  const { status } = useSession()
  const signInWithWallet = useSignInWithWallet()
  const signin = signInWithWallet.bind(null, { pathname, search })

  useEffect(() => {
    signin()
  }, [isConnected, status, address])

  const signInHandlerMap = {
    web3: () => {
      if (isConnected || address) {
        signin(address)
      } else {
        openConnectModal()
      }
    },
    google: authWithGoogle.bind(null, from),
    github: authWithGithub.bind(null, from),
  }

  return (
    <div className="flex">
      {['google', 'github', 'web3'].map(key => (
        <div
          onClick={signInHandlerMap[key]}
          key={`login-${key}`}
          className="flex h-12 flex-1 cursor-pointer items-center justify-between bg-[#f1f1f1] px-6 first-of-type:mr-[2px] first-of-type:rounded-l-xl last-of-type:ml-[2px] last-of-type:rounded-r-xl hover:bg-[#DADADA] hover:opacity-100"
        >
          <p className="opacity-60">{signInTypeMap[key].name}</p>
          <span className="hidden opacity-60 md:block">{signInTypeMap[key].icon}</span>
        </div>
      ))}
    </div>
  )
}

export default QuickAuthWidget
