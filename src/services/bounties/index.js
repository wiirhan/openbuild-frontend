import { post, get } from '@/utils/request'

export async function apply(id, comment) {
  return await post(`ts/v1/build/general/bounties/${id}/builders`, { comment })
}

export async function reApply(id, bid, comment) {
  return await post(`ts/v1/build/general/bounties/${id}/builders/${bid}`, { comment })
}

export async function addProgress(id, comment) {
  return await post(`ts/v1/build/general/bounties/${id}/events`, { comment })
}
export async function getProgressList(id, bid) {
  return await get(`ts/v1/build/general/bounties/${id}/builders/${bid}/events/progress`)
}

export async function termination(id, amount, sig, close_bounty, deadline) {
  return await post(`ts/v1/build/creator/bounties/${id}/status/termination/propose`, {
    amount,
    sig,
    close_type: close_bounty,
    deadline,
  })
}

export async function finishConfirm(id, hash) {
  return await post(`ts/v1/build/creator/bounties/${id}/status/finish/confirm`, { hash })
}

export async function finishDeny(id) {
  return await post(`ts/v1/build/creator/bounties/${id}/status/finish/deny`)
}

export async function biulderFinish(id, amount, sig, deadline) {
  return await post(`ts/v1/build/dashboard/bounties/${id}/status/finish/propose`, {
    amount,
    sig,
    deadline,
  })
}

export async function builderTerminationConfirm(id, hash) {
  return await post(`ts/v1/build/dashboard/bounties/${id}/status/termination/confirm`, { hash })
}

export async function builderTerminationDeny(id) {
  return await post(`ts/v1/build/dashboard/bounties/${id}/status/termination/deny`)
}

export async function arbitrate(id) {
  return await post(`ts/v1/build/general/bounties/${id}/status/arbitrate`)
}
