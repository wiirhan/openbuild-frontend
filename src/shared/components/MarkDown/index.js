import { Editor, Viewer } from '@bytemd/react'

import { upload } from '#/services/common'
import { useMediaUrl } from '#/state/application/hooks'

import { getPlugins, sanitize } from '../../utils/markdown'

export function OEditor({ onChange, ...props }) {
  const mediaUrl = useMediaUrl()
  const uploadCallback = async file => {
    const formData = new FormData()
    formData.append('file', file, file.name)
    formData.append('intent', 'course_series')
    const res = await upload({ file: formData })
    return { url: mediaUrl + res.data.user_upload_path }
  }

  return (
    <Editor
      sanitize={sanitize}
      mode="split"
      value={props.value}
      plugins={getPlugins()}
      onChange={onChange}
      uploadImages={files => {
        const mapedUpload = files.map(async i => {
          const res = await uploadCallback(i)
          return res
        })
        return Promise.all(mapedUpload)
      }}
    />
  )
}

export function OViewer({ ...props }) {
  return <Viewer sanitize={sanitize} value={props.value} plugins={getPlugins()} />
}
