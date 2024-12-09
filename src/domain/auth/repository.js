import httpClient from '@/utils/http'

async function signWallet(address) {
  return httpClient.post('/auth/user/verification/code/wallet', { public_address: address })
}

async function signInWithWallet({ id, signature, address} ) {
  return httpClient.post('/auth/user/wallet/login', { id, signature, public_address: address }, { isSetJwt: true })
}

async function bindWallet({ id, signature, address }) {
  return httpClient.post('/auth/user/wallet/bind', { id, signature, public_address: address }, { isSetJwt: true })
}

async function unbindWallet() {
  return httpClient.post('/auth/user/wallet/unbind')
}

async function sendEmailCode({ email, type }) {
  return httpClient.post('/auth/user/verification/code/email', { email, type })
}

export {
  signWallet, signInWithWallet, bindWallet, unbindWallet,
  sendEmailCode,
}
