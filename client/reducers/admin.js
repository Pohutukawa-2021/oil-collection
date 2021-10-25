import { FETCH_ALL_CLIENTS_SUCCESS } from '../actions/admin'

const initialUser = {
}

function admin (state = initialUser, action) {
  switch (action.type) {
    case FETCH_ALL_CLIENTS_SUCCESS:
      return action.clients

    default:
      return state
  }
}

export default admin
