'use client'

// import NextNProgress from 'nextjs-progressbar'
import NextTopLoader from 'nextjs-toploader'

export function RouterProgress({ children }) {
  return (
    <>
      {children}
      <NextTopLoader
        color="#01DB83"
        initialPosition={0.08}
        showSpinner={false}
        crawlSpeed={200}
        height={2}
        easing="ease"
        speed={200}
      />
    </>
  )
}
