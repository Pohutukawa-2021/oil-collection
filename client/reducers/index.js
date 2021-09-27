import { UPDATE_CLIENT_DETAILS, ADD_TOKEN_DETAILS } from '../actions/clients'

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
    case ADD_TOKEN_DETAILS:
      return authDetailHelper(state, action.details)
    default:
      return state
  }
}

function authDetailHelper (state, details) {
  const { auth0Id, email, token } = details
  return {
    ...state,
    auth0Id,
    email,
    token
  }
}

function updateClientHelper (state, details) {
  const { id, firstName, lastName, businessName, addressStreet, addressSuburb, addressCity, product, containers, price, orderActive } = details
  return {
    ...state,
    id,
    firstName,
    lastName,
    businessName,
    addressStreet,
    addressSuburb,
    addressCity,
    product,
    containers,
    price,
    orderActive
  }
}

export default updateClients
