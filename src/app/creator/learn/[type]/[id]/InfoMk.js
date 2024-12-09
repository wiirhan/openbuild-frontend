import { OEditor } from '@/components/MarkDown'

export default function InfoMk({ value, change }) {
  return (
    <div>
      <OEditor value={value} onChange={e => change(e)} />
    </div>
  )
}
