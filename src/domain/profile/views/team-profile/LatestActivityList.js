import { formatTime } from '@/utils/date'

const typeTextMap = {
  open_course: 'Open Course',
  bounty: 'Bounty',
  challenges: 'Challanges',
  quiz: 'Quiz',
}

function LatestActivityList({ activities }) {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4 md:gap-4">
      {activities?.map(i => (
        <div
          key={`user-profile-activities-${i.created_at}`}
          className="border border-gray-600 p-6 rounded break-all relative"
        >
          {/* <Image className="absolute top-0 right-0" width={44} height={20} src={'/images/svg/profile-activities-new.svg'} alt="" /> */}
          {i.type !== '' && <p className="text-sm text-[#3AAB76]">{typeTextMap[i.type]}</p>}
          <h5 className="my-2">{i.title}</h5>
          <p className="text-sm opacity-80 truncate">Posted on {formatTime(i.created_at * 1000)}</p>
        </div>
      ))}
    </div>
  )
}

export default LatestActivityList
