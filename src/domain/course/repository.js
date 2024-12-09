import { merge } from 'lodash'

import { legacyClient } from '@/utils/http'

async function fetchPublishedCourseList(params = {}) {
  const { userId, sort, ...others } = params

  return legacyClient.get('/learn/course/opencourse', {
    params: merge({ take: 20 }, others, {
      team_uid: userId,
      order: sort || 'default',
    })
  })
}

async function fetchEnrolledCourseList(params = {}) {
  const { userId, sort, ...others } = params

  return legacyClient.get('/learn/dashboard/public/enrool/series', {
    params: merge({ take: 20 }, others, {
      id: userId,
      series_type: 'open_course',
      order: sort || 'default',
    })
  })
}

export { fetchPublishedCourseList, fetchEnrolledCourseList }
