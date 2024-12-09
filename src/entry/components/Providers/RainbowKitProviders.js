'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit' // RainbowKitAuthenticationProvider

import '@rainbow-me/rainbowkit/styles.css';

import { chains } from '@/constants/chain'

export function RainbowKitProviders({ children }) {
  return (
    <RainbowKitProvider chains={chains} locale="en-US" avatar={undefined}>
      {children}
    </RainbowKitProvider>
  )
}
