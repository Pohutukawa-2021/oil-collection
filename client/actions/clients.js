export const UPDATE_CLIENT_DETAILS = 'UPDATE_CLIENT_DETAILS'

// export const FETCH_CLIENT_DETAILS = 'FETCH_CLIENT_DETAILS'
// export function fetchClientDetails () {
//   return {
//     type: FETCH_CLIENT_DETAILS
//   }
// }

// export function getUserDetails () {
//   return getClientDetails()
//     .then(dispatch => {
//       dispatch(fetchClientDetails())
//       return null
//     })
// }

export function updateDetails (details) {
  return {
    type: UPDATE_CLIENT_DETAILS,
    details
  }
}
