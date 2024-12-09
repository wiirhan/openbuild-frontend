import { isFunction } from 'lodash'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'

import { bindWallet } from '../repository'
import useSignWallet from './useSignWallet'

function useBindWallet() {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const signWallet = useSignWallet()

  return async successCallback => {
    if (!isConnected) {
      return openConnectModal()
    }

    signWallet(async payload => {
      const signRes = await bindWallet(payload)

      if (signRes.success) {
        isFunction(successCallback) && successCallback(payload.address)
      }
    })

  }
}

export default useBindWallet
