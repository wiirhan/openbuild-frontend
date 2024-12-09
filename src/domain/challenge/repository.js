import { merge } from 'lodash'

import httpClient, { legacyClient } from '@/utils/http'

async function fetchOne(id) {
  return legacyClient.get(`/learn/course/challenges/${id}`)
}

async function fetchPublishedChallengeList(params = {}) {
  const { userId, sort, ...others } = params

  return legacyClient.get('/learn/course/challenges', {
    params: merge({ take: 20 }, others, {
      team_uid: userId,
      order: sort || 'default',
    })
  })
}

async function fetchEnrolledChallengeList(params = {}) {
  const { userId, sort, ...others } = params

  return legacyClient.get('/learn/dashboard/public/enrool/series', {
    params: merge({ take: 20 }, others, {
      id: userId,
      series_type: 'challenges',
      order: sort || 'default',
    })
  })
}

async function updateMultipleApplicantStatus(id, { userIds, status }) {
  return httpClient.post(`/learn/creator/series/${id}/batch/enrool/status`, { uids: userIds, status })
}

async function fetchEmailTemplate(id) {
  return httpClient.get(`/learn/creator/series/${id}/email`)
}

async function updateEmailTemplate(id, { title, body }) {
  return httpClient.post('/learn/creator/series', {
    base: { course_series_id: Number(id) },
    challenges_extra: {
      course_challenges_extra_email_pass_title: title,
      course_challenges_extra_email_pass_html: body,
    },
  })
}

export {
  fetchOne,
  fetchPublishedChallengeList,
  fetchEnrolledChallengeList,
  updateMultipleApplicantStatus,
  fetchEmailTemplate,
  updateEmailTemplate,
}
