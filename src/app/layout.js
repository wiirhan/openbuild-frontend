import '@/styles/all.scss'
import 'animate.css'
import 'react-toastify/scss/main.scss'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
import 'github-markdown-css/github-markdown-light.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { nunito_sans } from '#/lib/font'
import { siteConfig } from '#/lib/site'
import { getConfigs } from '#/services/common'

import { GoogleAnalytics } from '@/components/GoogleAnalytics'
// import { SartOnOpenBuild } from '@/components/SartOnOpenBuild'

import DefaultLayout from '../entry/layouts/default'
import ClientEntry from '../entry'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['OpenBuild web3 build bounty developer community'],
  authors: [
    {
      name: 'An open-source community and platform for Web3 developers',
      url: 'https://openbuild.com',
    },
  ],
  creator: 'An open-source community and platform for Web3 developers',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/t_image.jpg`],
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/t_image.jpg`],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default async function RootLayout({ children }) {
  const configRes = await getConfigs()

  return (
    <html lang="en" data-theme="light" className={`${nunito_sans.className} light`} suppressHydrationWarning>
      <body>
        <ClientEntry config={configRes}>
          <DefaultLayout>{children}</DefaultLayout>
        </ClientEntry>
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
