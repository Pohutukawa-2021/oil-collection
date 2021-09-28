const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./clients')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('GET Client details by id', () => {
  return db.getClientDetails('auth0|614bc653d42a69006aa03751', testDb)
    .then(listDetails => {
      expect(listDetails.firstName).toBe('Ahmed')
      expect(listDetails.addressSuburb).toBe('Chartwell')
      expect(listDetails.product).toBe('fat')
      return null
    })
})

test('SEND new request/order', () => {
  return db.activateOrder('auth0|614bc653d42a69006aa03751', testDb)
    .then(request => {
      expect(request.orderActive).toBe(1)
      return null
    })
})

test('UPDATE Client details', () => {
  const updateDetails = {
    id: 2,
    first_name: 'Zahira',
    last_name: 'Champion',
    business_name: 'CookSavvy',
    address_street: '1A Lilac Hwy',
    address_suburb: 'CBD',
    address_city: 'Auckland',
    product: 'fat',
    containers: 'drum'
  }
  return db.updateClientDetails(updateDetails, testDb)
    .then((details) => {
      expect(details.first_name).toBe('Zahira')
      expect(details.address_suburb).toBe('CBD')
      expect(details.product).toBe('fat')
      return null
    })
})

test('ADD new user', () => {
  const addNewUser = {
    firstName: 'firstName',
    lastName: 'lastName',
    businessName: 'businessName',
    address: 'address',
    suburb: 'suburb',
    city: 'city',
    product: 'product'
  }
  return db.addUser(addNewUser, testDb)
    .then(user => {
      expect(user.firstName).toBe('firstName')
      expect(user.city).toBe('city')
      expect(user.product).toBe('product')
      return null
    })
})
