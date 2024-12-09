import { OEditor } from '@/components/MarkDown'

export default function SelfRecommendationMarkdown({ value, onChange }) {
  return (
    <div className="OEditor-hidden-rightbar">
      <OEditor value={value} onChange={onChange} />
    </div>
  )
}
