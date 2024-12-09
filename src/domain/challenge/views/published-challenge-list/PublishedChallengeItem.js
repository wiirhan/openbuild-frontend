import { useRouter } from 'next/navigation'
import Link from 'next/link'

import Image, { SvgIcon } from '@/components/Image'

function PublishedChallengeItem({ data, viewingSelf }) {
  const router = useRouter()

  return data ? (
    <div className="flex flex-col gap-6 pb-6 border-b border-gray-400 mb-6 group md:flex-row">
      <div className="relative">
        <Image
          width={180} height={100}
          onClick={() => router.push(`/learn/challenges/${data.base.course_series_id}`)}
          className="w-full h-auto aspect-19/10 object-cover rounded-lg cursor-pointer transition-all group-hover:scale-110 md:w-[180px] md:h-[100px]"
          src={data?.base.course_series_img} alt=""
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3
            className="mb-2 cursor-pointer hover:underline"
            onClick={() => router.push(`/learn/challenges/${data.base.course_series_id}`)}
          >
            {data?.base.course_series_title}
          </h3>
          {data?.enrool_users?.length > 0 && <div className="flex gap-2 text-sm items-center">
            <div className="flex">
              <div suppressHydrationWarning className="flex [&>img]:ml-[-8px] [&>img]:rounded-full [&>img]:border [&>img]:border-white [&>img:first-child]:ml-0">
                {data?.enrool_users?.slice(0, 10).map(i => (
                  <Image
                    key={`challenge-${data.base.course_series_id}-enrolled-user-${i.user_id}`}
                    width={24}
                    height={24}
                    src={i.user_avatar}
                    alt=""
                    className="h-6 w-6 object-cover"
                  />
                ))}
                {data?.enrool_users?.length > 10 && <span className="ml-[-8px] w-6 h-6 inline-block rounded-full bg-white text-center leading-4">...</span>}
              </div>
            </div>
            {data?.enrool_users.length}+ Builders Enroll
          </div>}
        </div>
        <p className="mt-4 text-sm opacity-80 md:mt-0">
          Course Sections <strong>{data?.base.course_series_single_num}</strong>
           {/* <span className="opacity-40">|</span> <strong>2,132</strong> Builders View */}
        </p>
      </div>
      {viewingSelf && (
        <Link
          href={`/creator/learn/challenges/${data.base.course_series_id}`}
          className="hidden text-sm md:flex items-center cursor-pointer font-bold gap-2"
        >
          Edit
          <SvgIcon name="arrow-right-top" size={16} />
        </Link>
      )}
    </div>
  ) : null
}

export default PublishedChallengeItem
