// import { Content } from './Content'
import { get } from '@/utils/request'

import { Banner } from './Banner'
import InfoCard from './InfoCard'

export default async function UserProfileLayout({ params, children }) {
  const { data } = await get(`ts/v1/user/info/handle/${params.handle}`, {isServer: true})

  return (
    <>
      <Banner data={data} />
      <div className="relative max-w-[1440px] min-h-[620px] mx-auto p-6 bg-white md:p-0 md:bg-transparent">
        <InfoCard data={data} />
        <div className="pt-6">{children}</div>
      </div>
    </>
  )
}
