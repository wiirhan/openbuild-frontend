import { isFunction } from 'lodash'
import { useSignMessage } from 'wagmi'

import { signWallet } from '../repository'
import useEnsureRightEnv from './useEnsureRightEnv'

function useSignWallet() {
  const { signMessageAsync } = useSignMessage()
  const { address, wrap } = useEnsureRightEnv()

  return wrap(async successCallback => {
    const { success, data } = await signWallet(address)

    if (!success) {
      return
    }

    const signature = await signMessageAsync({ message: data.nonce })

    isFunction(successCallback) && successCallback({ id: Number(data.id), signature, address })
  })
}

export default useSignWallet
