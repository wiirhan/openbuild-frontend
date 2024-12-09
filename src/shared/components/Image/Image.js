import NextImage from 'next/image'
import { useAssetUrl } from '#/state/application/hooks'

function Image({ width, height, src, alt = '', defaultSrc, className, ...rest }) {
  const resolvedSrc = useAssetUrl(src) || defaultSrc

  return resolvedSrc && (
    <NextImage
      {...rest}
      className={className}
      width={width}
      height={height}
      src={resolvedSrc}
      alt={alt}
    />
  )
}

export default Image
