import { Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const PT_Mono = localFont({
  src: [
    {
      path: '../../public/font/pt-mono.regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/pt-mono.bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const AvenirNext = localFont({
  src: [
    {
      path: '../../public/font/AvenirNext-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/AvenirNext-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
