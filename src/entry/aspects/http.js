import { toast } from 'react-toastify'

import httpClient, { legacyClient } from '@/utils/http'

let alreadySet = false

function handleResponse(res) {
  if (!res.success) {
    toast.error(res.message)
  }

  return res
}

function setInterceptors() {
  if (alreadySet) {
    return
  }

  httpClient.use(handleResponse)
  legacyClient.use(handleResponse)

  alreadySet = true
}

export default setInterceptors
