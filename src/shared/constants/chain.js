import { configureChains, createConfig } from 'wagmi'
import { bsc } from '@wagmi/chains'
import { bscTestnet } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  bitgetWallet,
  coinbaseWallet,
  ledgerWallet,
  uniswapWallet,
  argentWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets'

const supportedChains = [bsc]

if (process.env.NODE_ENV !== 'production') {
  supportedChains.push(bscTestnet)
}

export const { chains, provider, publicClient } = configureChains(
  supportedChains,
  [
    infuraProvider({ apiKey: '55b6ecef5cd54bd2a5216c2850a27d96' }),
    alchemyProvider({ apiKey: 'QUG1UPGxyMl5oV9CxZ7RzwNb_s-91tX4' }),
    publicProvider(),
  ]
)

// export const client = createClient({
//   autoConnect: true,
//   provider,
// })



// export const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains
// })

const projectId = '468b8dc80492041ddb38d8564b800af7'

export const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains, projectId }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      bitgetWallet({ projectId, chains }),
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ chains }),
      ledgerWallet({ projectId, chains }),
      uniswapWallet({ projectId, chains })
    ],
  },
])

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function BOUNTY_SUPPORTED_CHAIN() {
  if (process.env.NEXT_PUBLIC_DOMAIN_ENV === 'development' || process.env.NEXT_PUBLIC_DOMAIN_ENV === 'test') {
    return 56
  } else {
    return 56
  }
}

export function NFT_SUPPORTED_CHAIN() {
  if (process.env.NEXT_PUBLIC_DOMAIN_ENV === 'development' || process.env.NEXT_PUBLIC_DOMAIN_ENV === 'test') {
    return 97
  } else {
    return 56
  }
}

