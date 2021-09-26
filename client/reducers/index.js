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
  switch (action.type) {
    case UPDATE_CLIENT_DETAILS:
      return action.details
    default:
      return state
  }
}

export default updateClients
