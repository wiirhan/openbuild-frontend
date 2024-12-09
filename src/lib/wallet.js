import MatemaskIcon from 'public/images/svg/matemask.svg'
import WalletconnectIcon from 'public/images/svg/walletconnect.svg'
import BitkeepIcon from 'public/images/svg/bitkeep.svg'

import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { BitkeepConnector } from './BitkeepConnector'
import { chains } from '@/constants/chain'

export const injected = new InjectedConnector({
  chains,
})

export const SUPPORTED_WALLETS = {
  // INJECTED: {
  //   connector: injected,
  //   name: 'Injected',
  //   icon: 'injected.svg',
  // },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: MatemaskIcon,
  },
  WALLET_CONNECT: {
    connector: new WalletConnectConnector({
      options: {
        projectId: '468b8dc80492041ddb38d8564b800af7',
        showQrModal: true,
      },
    }),
    name: 'WalletConnect',
    icon: WalletconnectIcon,
  },
  Bitkeep: {
    connector: new BitkeepConnector({
      chains,
    }),
    name: 'Bitkeep',
    icon: BitkeepIcon,
  },
}
