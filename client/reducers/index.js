import { UPDATE_CLIENT_DETAILS } from '../actions/clients'

const initialUser = {
  id: 1,
  firstName: 'Jared',
  lastName: 'Pinfold',
  businessName: 'JP Bakery',
  addressStreet: '3 Eda st',
  addressSuburb: 'CBD',
  addressCity: 'Auckland',
  product: 'oil',
  containers: 'tank'
}

function updateClients (state = initialUser, action) {
  // const details = action.details
  switch (action.type) {
    case UPDATE_CLIENT_DETAILS:
      return updateClientHelper(state, action.details)
    default:
      return state
  }
}

function updateClientHelper (state, details) {
  const { auth0Id, email, token } = details
  return {
    ...state,
    auth0Id,
    email,
    token
  }
}

export default updateClients
