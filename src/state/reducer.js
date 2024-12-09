import { combineReducers } from '@reduxjs/toolkit'

import application from './application/reducer'
import shilling from './shilling/reducer'

const reducer = combineReducers({
  application,
  shilling,
})

export default reducer
