import { post, get } from '@/utils/request'

export async function adsEmail(email, type) {
  const res = await post('v1/public/contact/email', { email, type })
  return res
}

export async function upload(parmas) {
  const res = await post('v1/util/upload/file', parmas.file, {
    type: 'upload',
  })
  return res
}

export async function ownedNFTs(address) {
  const res = await get(`ts/v1/nft/general/tools/address/owned?address=${address}`)
  return res
}

export async function getConfigs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}ts/v1/config`, { cache: 'no-store' })
  if (!res.ok) {
    return null
    // throw console.error('Failed to fetch data')
  }
  return res.json()
}
