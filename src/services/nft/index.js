import { get, post } from '@/utils/request'
export async function nftSign(id) {
  return await get(`ts/v1/nft/general/infos/${id}/sign`)
}

export async function suiNftSign(id) {
  return await get(`ts/v1/nft/general/infos/${id}/sign/move`)
}

export async function sendMintedHash(id, hash, chainId) {
  return await post(`ts/v1/nft/general/infos/${id}/hash`, {mint_hash: hash, mint_chain_id: chainId})
}
