import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function Title({ title, desc, link, linkText }) {
  return (
    <div className="pt-6 pb-6 text-center">
      <h1 className="text-[24px] font-bold leading-[32px] md:text-[36px] md:leading-[42px]">{title}</h1>
      <div className="mt-2 flex justify-center flex-col text-[13px] opacity-80 md:flex-row md:items-center md:text-[15px]">
        <p>{desc}</p>
        {link && (
          <div className="flex justify-center items-center md:ml-3">
            <ArrowRightIcon className="mr-2 h-4" />
            <Link href={link} target="_blank" className="font-bold underline hover:text-green transition-all">
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
