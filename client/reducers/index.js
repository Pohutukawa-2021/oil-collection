import { combineReducers } from 'redux'

import updateClients from './clients'
import admin from './admin'

export default combineReducers({
  updateClients,
  admin
})
