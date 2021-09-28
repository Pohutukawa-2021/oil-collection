import { UPDATE_CLIENT_DETAILS, ADD_TOKEN_DETAILS, UPDATE_ORDER_ACTIVE_STATUS } from '../actions/clients'

const initialUser = {
}

function updateClients (state = [], action) {
  // const details = action.details
  switch (action.type) {
    case UPDATE_ORDER_ACTIVE_STATUS:
      return activeOrderHelper(state, action.orderStatus)
    case UPDATE_CLIENT_DETAILS:
      return updateClientHelper(state, action.details)
    case ADD_TOKEN_DETAILS:
      return authDetailHelper(state, action.details)
    default:
      return state
  }
}

function activeOrderHelper (state, order) {
  const { orderActive } = order
  return {
    ...state,
    orderActive
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
