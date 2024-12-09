'use client'

import { ReduxProviders } from '#/state/provider'

import setInterceptorsForHttpClients from './aspects/http'

import { Providers } from './components/Providers'
import { Toast } from './components/Toast'
import { RouterProgress } from './components/RouterProgress'
import { RouteIntercept } from './components/RouteIntercept'

setInterceptorsForHttpClients()

function ClientEntry({ config, children }) {
  return (
    <Providers>
      <RouterProgress>
        <Toast />
        <ReduxProviders datas={{ configs: config }}>
          {children}
          <RouteIntercept />
        </ReduxProviders>
      </RouterProgress>
    </Providers>
  )
}

export default ClientEntry
