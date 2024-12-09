
import { HomeMain } from './home/Main'
import { get } from '@/utils/request'

export default async function Page() {
  const { data } = await get('ts/v1/index', {isServer: true})
  return <HomeMain data={data} />
}
