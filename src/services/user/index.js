import { post } from '@/utils/request'

export function postUserInfo(params) {
  return post('ts/v1/user/info', params)
}

export async function changeBanner(img) {
  return await post('ts/v1/user/info/banner', { background_image: img })
}
