import { useSession, signIn } from 'next-auth/react'

import { signInWithWallet } from '../repository'
import useSignWallet from './useSignWallet'

function useSignInWithWallet() {
  const { status } = useSession()
  const signWallet = useSignWallet()

  return async ({ pathname, search }) => {
    if (status !== 'unauthenticated') {
      return
    }

    signWallet(async payload => {
      const signRes = await signInWithWallet(payload)

      if (!signRes.success) {
        return
      }

      // router.push(`/bind/wallet?nonce=${_nonce.id}&signature=${signature}&account=${account}`)
      const cUrl = pathname.includes('/signin') ? decodeURIComponent(search?.get('from') || '/profile') : window.location.href

      window.localStorage.setItem('signType', 'wallet')

      const data = await signIn('credentials', {
        token: signRes.data.token,
        redirect: false,
        callbackUrl: cUrl,
      })

      // console.log(data)
      if (data?.ok && data.url) {
        window.location.href = data?.url
      }
    })
  }
}

export default useSignInWithWallet
