import { formatTime } from '@/utils/date'
import Avatar from '@/components/Avatar'

function GainedReputationItem({ data }) {
  return (
    <div className="w-full aspect-square md:w-[180px] text-center p-4 border border-gray-600 rounded">
      <div className="flex justify-center">
        <Avatar src={data.img} alt={data.title} size={100} />
      </div>
      <h3 className="text-sm truncate leading-5 flex-1 mt-2">{data.title}</h3>
      <p className="text-xs opacity-40">{formatTime(data.updated_at * 1000, 'MMM D, YYYY')}</p>
    </div>
  )
}

export default GainedReputationItem
