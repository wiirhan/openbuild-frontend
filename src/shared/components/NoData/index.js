import clsx from 'clsx'
import Image from 'next/image'

import nodataPic from './nodata.svg'

export function NoData({ className, style }) {
  return (
    <div
      className={clsx('mt-14 flex flex-col items-center', className)}
      style={style}
    >
      <Image src={nodataPic} alt="No data" />
      <p className="mt-5 text-sm opacity-60">No content yet</p>
    </div>
  )
}
