import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  reducer,
})

export default store
