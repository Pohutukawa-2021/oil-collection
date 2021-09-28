import { addOrder, addUser, getClientDetails, updateClientDetails } from '../api/clients'

export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS'
export const ADD_TOKEN_DETAILS = 'ADD_TOKEN_DETAILS'

export const SHOW_ERROR = 'SHOW_ERROR'
export const UPDATE_ORDER_ACTIVE_STATUS = 'UPDATE_ORDER_ACTIVE_STATUS'

export function updateOrderActiveStatus () {
  const orderStatus = { orderActive: true }
  return {
    type: UPDATE_ORDER_ACTIVE_STATUS,
    orderStatus
  }
}

export function updateDetails (details) {
  return {
    type: UPDATE_CLIENT_DETAILS,
    details
  }
}

export function addNewOrder (id) {
  return (dispatch) => {
    addOrder(id)
      .then(() => {
        dispatch(updateOrderActiveStatus())
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

export function addAuth (details) {
  return {
    type: ADD_TOKEN_DETAILS,
    details
  }
}

export function getAuthClient (user) {
  return user.auth0Id !== ''
    ? dispatch => {
      dispatch(addAuth(user))
      return getClientDetails(user.auth0Id, user.token)
        .then(client => {
          dispatch(updateDetails(client))
          return null
        })
        .catch(err => console.error(err))
    }
    : null
}

export function registerDetails (user) {
  return dispatch => {
    addUser(user, user.token)
      .then(() => {
        console.log(user)
        dispatch(updateDetails(user))
        return null
      })
      .catch(err => console.error(err))
  }
}

export function editDetails (user) {
  return dispatch => {
    updateClientDetails(user, user.token)
      .then(() => {
        dispatch(updateDetails(user))
        return null
      })
      .catch(err => console.error(err))
  }
}
