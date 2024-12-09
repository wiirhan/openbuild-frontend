import { SvgIcon } from '@/components/Image'

function SocialLink({ url, icon, extra, children }) {
  return (
    <a className="h-9 flex justify-between items-center px-4 border-b border-gray-600 last:border-0 hover:bg-gray-1000" href={url} target="_blank" rel="noreferrer">
      <div className="flex justify-between items-center" style={{ flexGrow: 1, paddingRight: '8px' }}>
        <div className="flex items-center">
          <SvgIcon name={icon} size={16} />
          <p className="pl-2 pr-1 text-sm font-semibold">{children}</p>
        </div>
        {extra}
      </div>
      <SvgIcon style={{ flexShrink: 0 }} name="share" size={14} />
    </a>
  )
}

export default SocialLink
