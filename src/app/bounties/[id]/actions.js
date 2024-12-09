'use server'

import { revalidatePath } from 'next/cache'
import { post } from '@/utils/request'

export async function applyAction(id, comment) {
  try {
    const res = await post(`ts/v1/build/general/bounties/${id}/builders`, { comment }, { isServer: true })
    if (res.code === 200) {
      return revalidatePath('/')
    } else {
      return res
    }
  } catch (e) {
    return { message: 'Failed to request' }
  }
}
