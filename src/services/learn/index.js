import { get, post } from '@/utils/request'

export async function joinChallengesEnrool(id, data, code) {
  const res = await post(`ts/v1/learn/general/course/challenges/${id}/permission/enrool`, { data, ...code })
  return res
}

/**
 * Get series details
 * @param id series id
 * @returns /
 */
export async function courseDetails(id, type) {
  const res = await get(`v1/learn/course/${type}/${id}`)
  return res.data
}

/**
 * Upload a single lesson Watch progress markers
 * @param id series id
 * @returns /
 */
export async function uploadSingleProgress(id) {
  const res = await post(`ts/v1/learn/general/course/single/${id}/time`)
  return res.data
}

export async function pay(id, hash) {
  const res = await post(`ts/v1/learn/general/course/challenges/${id}/permission/pay`, { hash })
  return res
}
