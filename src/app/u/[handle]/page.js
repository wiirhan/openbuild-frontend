import { get } from '@/utils/request'

import ProjectOwner from './ProjectOwner'
import ProjectPersonal from './ProjectPersonal'

export default async function UserProfile({params}) {
  const { data } = await get(`ts/v1/user/info/handle/${params.handle}`, {isServer: true})

  if (!data?.base?.user_project_owner) {
    return <ProjectPersonal data={data} />
  }

  const { data: activityData } = await get(`ts/v1/user/info/${data?.base.user_id}/creator/activity`, {isServer: true})

  return <ProjectOwner data={data} activities={activityData?.list || []} />
}
