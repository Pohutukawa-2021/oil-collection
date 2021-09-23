const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./register')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
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
