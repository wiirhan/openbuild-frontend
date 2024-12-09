
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const hiddenPath = ['/signin', 'signup', '/forgot', '/reset', '/change', '/questions']

export function useHeaderAndFooterDisplay() {
  const pathname = usePathname()
  
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const h = hiddenPath.map(i => pathname.includes(i) ? 1 : 0)
    h.includes(1) ? setHidden(true) : setHidden(false)
  }, [pathname])
  return hidden
}
const footerHiddenPath = ['/signin', 'signup', '/forgot', '/reset', '/change', '/profile', '/creator', '/questions']
export function useFooterDisplay() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const h = footerHiddenPath.map(i => pathname.includes(i) ? 1 : 0)
    h.includes(1) ? setHidden(true) : setHidden(false)
  }, [pathname])
  return hidden
}