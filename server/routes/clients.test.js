const request = require('supertest')
const server = require('../server')
const db = require('../db/clients')
jest.mock('../db/clients')

test('GET customer details returns all details', () => {
  db.getCustomerDetails = jest.fn()
  db.getCustomerDetails.mockImplementation(() => {
    return Promise.resolve({ id: 123 })
  })
  return request(server)
    .get('/api/v1/clients/4')
    .then((response) => {
      expect(response.status).toBe(200)
      expect(response.body).not.toBe({})
      expect(response.body.id).toBe(123)
      return null
    })
})
