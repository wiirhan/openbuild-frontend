import { merge } from 'lodash'

import httpClient from '@/utils/http'

async function updateRespondentContacts({ id, quid, ...others }) {
  return httpClient.post(`/quiz/${id}/answer/${quid}/address`, others)
}

async function fetchPublishedQuizList(params = {}) {
  const { userId, sort, ...others } = params

  return httpClient.get('/quiz', {
    params: merge({ take: 20 }, others, {
      team_uid: userId,
      sort_by: sort || 'default',
    })
  })
}

async function fetchAnsweredQuizList(params = {}) {
  const { userId, sort, ...others } = params

  return httpClient.get(`/quiz/public/${userId}/answer`, {
    params: merge({ take: 20 }, others, { sort_by: sort || 'default' })
  })
}

export { updateRespondentContacts, fetchPublishedQuizList, fetchAnsweredQuizList }
