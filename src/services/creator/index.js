import { post } from '@/utils/request'

export async function addSeries(params) {
  return await post('ts/v1/learn/creator/series', params)
}

export async function seriesStatus(params) {
  return await post(`ts/v1/learn/creator/series/${params.id}/status`, { status: params.status })
}

export async function deleteSeries(params) {
  return await post(`ts/v1/learn/creator/series/${params.id}/delete`)
}

export async function enroolStatus(params) {
  return await post(`ts/v1/learn/creator/series/${params.id}/enrool/${params.uid}/status`, {
    status: params.status,
  })
}

export async function publishBounty(params) {
  return await post('ts/v1/build/creator/bounties', params)
}

export async function editBounty(id, params) {
  return await post(`ts/v1/build/creator/bounties/${id}`, params)
}

export async function changeBountyStatus(id, status) {
  return await post(`ts/v1/build/creator/bounties/${id}/status/base`, { status })
}
export async function denyBuilder(id, bid) {
  return await post(`ts/v1/build/creator/bounties/${id}/builders/${bid}/status/deny`)
}

export async function approveBuilder(id, bid, hash) {
  return await post(`ts/v1/build/creator/bounties/${id}/builders/${bid}/status/approve`, { hash })
}

export async function deleteSpeaker(id, sid) {
  return await post(`ts/v1/learn/creator/series/${id}/speaker/${sid}/delete`)
}

