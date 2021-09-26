import { updateClientDetails } from '../api/clients'

export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS'

export function updateDetails (details) {
  return {
    type: UPDATE_CLIENT_DETAILS,
    details
  }
}

export function testthunk (details) {
  return dispatch => {
    updateClientDetails(details)
      .then(details => {
        dispatch(updateDetails(details))
        return null
      })
      .catch(err => console.error(err))
  }
}
