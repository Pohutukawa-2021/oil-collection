export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS'

export function updateDetails (details) {
  return {
    type: UPDATE_CLIENT_DETAILS,
    details
  }
}
