'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { RainbowKitProviders } from './RainbowKitProviders'
import { SuiProviders } from './SuiProviders'
import { SessionProvider } from 'next-auth/react'


import { wagmiConfig } from '@/constants/chain'
import { WagmiConfig } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';

export function Providers({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GA_KEY || ''}>
      <SessionProvider>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProviders>
            <SuiProviders>
              {children}
            </SuiProviders>
          </RainbowKitProviders>
        </WagmiConfig>
      </SessionProvider>
    </GoogleReCaptchaProvider>
  )
}
