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

test('GET customer details by id', () => {
  return db.getCustomerDetails(3, testDb)
    .then(listDetails => {
      expect(listDetails.firstName).toBe('Don')
      expect(listDetails.addressSuburb).toBe('CBD')
      expect(listDetails.product).toBe('oil')
      return null
    })
})

test('SEND new request/order', () => {
  return db.sendRequest(3, testDb)
    .then(request => {
      expect(request.orderActive).toBe(1)
      expect(request.orderActive).not.toBe(0)
      return null
    })
})
