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

test('UPDATE order active status', () => {
  db.activateOrder = jest.fn()
  db.activateOrder.mockImplementation(() => {
    return Promise.resolve({ order_active: 1 })
  })
  return request(server)
    .patch('/api/v1/clients/4/request')
    .then((orderStatus) => {
      expect(orderStatus.status).toBe(200)
      expect(orderStatus.body.order_active).toBe(1)
      return null
    })
})
