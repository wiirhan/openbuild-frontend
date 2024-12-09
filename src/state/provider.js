'use client'

import store from './index'
import { Provider } from 'react-redux'
import ApplicationUpdater from './application/updater'
import UserUpdater from './user/Updater'

export function ReduxProviders({ children, datas }) {
  return (
    <Provider store={store}>
      <>
        <ApplicationUpdater datas={datas} />
        <UserUpdater />
      </>
      {children}
    </Provider>
  )
}
