'use client'

import { Header } from '../../components/Header'
import { Footer } from './Footer'

import { LayoutModals } from './LayoutModals'

function DefaultLayout({ children }) {
  return (
    <div className="text-gray">
      <Header />
      <div className="relative flex-1 bg-[#F8F8F8]">{children}</div>
      <Footer />
      <LayoutModals />
    </div>
  )
}

export default DefaultLayout
