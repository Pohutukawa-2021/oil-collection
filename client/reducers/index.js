import { UPDATE_ORDER_ACTIVE_STATUS } from '../actions/clients'

const initialUser = {
  id: 1,
  firstName: 'Jared',
  lastName: 'Pinfold',
  businessName: 'JP Bakery',
  addressStreet: '3 Eda st',
  addressSuburb: 'CBD',
  addressCity: 'Auckland',
  product: 'oil',
  containers: 'tank',
  orderActive: false
}

function updateClients (state = initialUser, action) {
  switch (action.type) {
    case UPDATE_ORDER_ACTIVE_STATUS:
      return activeOrderHelper(state, action.orderStatus)
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

export default updateClients
