import { updateClientDetails } from '../api/clients'

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
