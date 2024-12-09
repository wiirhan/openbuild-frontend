import clsx from 'clsx'

import Image from '../Image'

function Avatar({ className, size, src, defaultSrc, alt, user }) {
  const resolvedAlt = alt || (user && user.user_nick_name) || ''
  const imgClassName = `rounded-full object-fill w-[${size}px] h-[${size}px]`
  const imgProps = {
    width: size,
    height: size,
    src: src || (user && user.user_avatar),
    defaultSrc,
  }

  return user ? (
    <a className={clsx('block', `w-[${size}px]`, `h-[${size}px]`, className)} href={`/u/${user.user_handle}`}>
      <Image {...imgProps} className={imgClassName} alt={resolvedAlt} />
    </a>
  ) : <Image {...imgProps} className={clsx(imgClassName, className)} alt={resolvedAlt} />
}

export default Avatar
