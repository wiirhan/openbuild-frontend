import Image from './Image'

function SvgIcon({ className, style, size, name }) {
  return (
    <Image
      className={className}
      style={style}
      width={size}
      height={size}
      src=""
      defaultSrc={`/images/svg/${name}.svg`}
      alt={name}
    />
  )
}

export default SvgIcon
