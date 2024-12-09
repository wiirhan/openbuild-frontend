import { merge } from 'lodash'

import httpClient from '@/utils/http'

async function fetchPublishedBountyList(params = {}) {
  const { userId, sort, ...others } = params

  return httpClient.get('/build/general/bounties', {
    params: merge({ take: 20 }, others, {
      team_uid: userId,
      sort_by: sort || 'default',
    })
  })
}

async function fetchAppliedBountyList(params = {}) {
  const { userId, sort, ...others } = params

  return httpClient.get(`/build/dashboard/bounties/public/${userId}`, {
    params: merge({ take: 20 }, others, { sort_by: sort || 'default' })
  })
}

export { fetchPublishedBountyList, fetchAppliedBountyList }
