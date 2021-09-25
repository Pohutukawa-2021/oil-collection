import { UPDATE_CLIENT_DETAILS } from '../actions/clients'

const initialUser = {
  id: 10,
  firstName: 'testname',
  lastName: 'testlastname',
  businessName: 'testbusiness',
  addressStreet: 'teststreet',
  addressSuburb: 'testsuburb',
  addressCity: 'testcity',
  product: 'testproduct',
  containers: 'testoil'
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
