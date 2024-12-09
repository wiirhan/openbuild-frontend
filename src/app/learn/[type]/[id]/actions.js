'use server'

import { revalidatePath } from 'next/cache'
import { post } from '@/utils/request'

export async function enrollAction(id) {
  try {
    const res = await post(`ts/v1/learn/general/course/opencourse/${id}/permission/enrool`, {}, { isServer: true })
    if (res.code === 200) {
      return revalidatePath('/')
    } else {
      return res
    }
  } catch (e) {
    return { message: 'Failed to request' }
  }
}

export async function revalidatePathAction() {
  return revalidatePath('/')
}

export async function growPathEnrollAction(id) {
  try {
    const res = await post(`ts/v1/learn/general/course/grow_path/${id}/permission/enrool`, {}, { isServer: true })
    console.log(res, 'res')
    if (res.code === 200) {
      return revalidatePath('/')
    } else {
      return res
    }
  } catch (e) {
    return { message: 'Failed to request' }
  }
}
