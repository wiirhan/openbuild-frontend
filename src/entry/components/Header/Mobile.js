import Link from 'next/link'
import Image from 'next/image'
// import { LanguageSwither } from './languageSwitcher'
import { classNames } from '@/utils'
import Logo from 'public/images/svg/logo-black.svg'
import { Bars3Icon } from '@heroicons/react/24/outline'

export function MobileHeader({ className }) {
  return (
    <div className={classNames('sticky top-0 z-20 flex items-center justify-center bg-white py-6', className)}>
      <Link href={'/'} className="flex">
        <Image className="h-[30px] w-auto" src={Logo} alt="" />
        <span className="ml-2 inline-block h-4 w-9 rounded-md border border-gray text-center text-xs font-normal leading-4 text-gray">
          BETA
        </span>
      </Link>
      <Bars3Icon className="absolute right-6 h-5 w-5" />
    </div>
  )
}
