import { combineReducers } from 'redux'

import updateClients from './client'
import admin from './admin'

export default combineReducers({
  updateClients,
  admin
})
