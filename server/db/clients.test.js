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

afterAll(() => {
  return testDb.destroy()
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
    firstName: 'firstName',
    lastName: 'lastName',
    businessName: 'businessName',
    addressStreet: 'addressStreet',
    addressSuburb: 'addressSuburb',
    addressCity: 'addressCity',
    product: 'product',
    containers: 'container',
    auth0Id: 'auth0|614bc653d42a69006aa03751',
    orderActive: false,
    price: 1
  }
  return db.updateClientDetails(updateDetails, testDb)
    .then(() => {
      return db.getClientDetails(updateDetails.auth0Id, testDb)
    })
    .then(details => {
      expect(details.firstName).toBe('firstName')
      expect(details.addressSuburb).toBe('addressSuburb')
      expect(details.product).toBe('product')
      return null
    })
})

test('ADD new user', () => {
  const addNewUser = {
    firstName: 'firstName',
    lastName: 'lastName',
    businessName: 'businessName',
    addressStreet: 'addressStreet',
    addressSuburb: 'addressSuburb',
    addressCity: 'addressCity',
    product: 'product',
    containers: 'container',
    auth0Id: 'auth0Id',
    orderActive: false,
    price: 1

  }
  return db.addUser(addNewUser, testDb)
    .then(() => {
      return db.getClientDetails(addNewUser.auth0Id, testDb)
    })
    .then(client => {
      expect(client.firstName).toBe('firstName')
      expect(client.addressCity).toBe('addressCity')
      expect(client.product).toBe('product')
      return null
    })
})
