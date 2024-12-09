import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { useConnectModal, useChainModal } from '@rainbow-me/rainbowkit'
import { toast } from 'react-toastify'

import { useBoundWallet } from '@/hooks/useBoundWallet'

function useEnsureRightEnv({
  walletRequired = false,
  autoConnect = false,
  chainId = undefined,
} = {}) {
  const { isConnected, address } = useAccount()
  const { chain, chains } = useNetwork()
  const { switchNetworkAsync } = useSwitchNetwork()
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const boundWallet = useBoundWallet()

  return {
    address,
    wrap: callback => async (...args) => {
      if (!isConnected || !address) {
        return autoConnect && openConnectModal()
      }

      let walletInvalid

      if (walletRequired) {
        walletInvalid = !boundWallet || address !== boundWallet
      } else {
        walletInvalid = !!boundWallet && address !== boundWallet
      }

      if (walletInvalid) {
        return toast.error([].concat(
          'Please connect your bound wallet address',
          boundWallet ? [`\`${boundWallet}\``] : [],
          'first.'
        ).join(' '))
      }

      if (!!chainId && chain.id !== chainId) {
        await switchNetworkAsync(chainId)
      } else if (chain.unsupported) {
        // 由于 `openChainModal` 不支持回调，故无法将交互流程一次串起
        if (chains.length !== 1) {
          return openChainModal()
        }

        await switchNetworkAsync(chains[0].id)
      }

      return callback(...args)
    },
  }
}

export default useEnsureRightEnv
