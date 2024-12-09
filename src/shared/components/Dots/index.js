'use client'
import { classNames } from '@/utils'

export default function Dots({ children = <span />, className }) {
  return (
    <>
      <style jsx>
        {`
          .dots::after {
            content: '.';
          }
        `}
      </style>
      <span
        className={classNames('dots after:animate-ellipsis after:inline-block after:w-4 after:text-left ', className)}
      >
        {children}
      </span>
    </>
  )
}
