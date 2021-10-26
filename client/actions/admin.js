import { fetchClients } from '../api/clients'

export const SHOW_ERROR = 'SHOW_ERROR'

export const FETCH_ALL_CLIENTS_PENDING = 'FETCH_ALL_CLIENTS_PENDING'
export const FETCH_ALL_CLIENTS_SUCCESS = 'FETCH_ALL_CLIENTS_SUCCESS'

export function fetchAllClientsPending () {
  return {
    type: FETCH_ALL_CLIENTS_PENDING
  }
}

export function fetchAllClientsSuccess (clients) {
  return {
    type: FETCH_ALL_CLIENTS_SUCCESS,
    clients: clients
  }
}

export function fetchAllClients () {
  return (dispatch) => {
    dispatch(fetchAllClientsPending())
    return fetchClients()
      .then((clients) => {
        dispatch(fetchAllClientsSuccess(clients))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
