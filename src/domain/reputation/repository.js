import httpClient from '@/utils/http'

async function fetchGainedReputationList(userId) {
  return httpClient.get(`/nft/general/public/${userId}/infos`)
}

export { fetchGainedReputationList }
