export function PreviewAlert({searchParams}) {
  return searchParams.mode === 'preview' ? 
    <p className="h-9 bg-[rgba(115,155,246,0.1)] text-[#739BF6] text-sm leading-9 px-6">Currently in preview mode</p> : null
}