import { addUser, getClientDetails } from '../api/clients'

export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS'
export const ADD_TOKEN_DETAILS = 'ADD_TOKEN_DETAILS'

export function updateDetails (details) {
  return {
    type: UPDATE_CLIENT_DETAILS,
    details
  }
}

export function addAuth (details) {
  return {
    type: ADD_TOKEN_DETAILS,
    details
  }
}

export function testfunction (user) {
  return dispatch => {
    dispatch(addAuth(user))
    getClientDetails(user.auth0Id, user.token)
      .then(client => {
        dispatch(updateDetails(client))
        return null
      })
      .catch(err => console.error(err))
  }
}

export function registerDetails (user) {
  return dispatch => {
    addUser(user, user.token)
      .then(() => {
        dispatch(updateDetails(user))
        return null
      })
      .catch(err => console.error(err))
  }
}
