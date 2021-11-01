/* eslint-disable jest/no-commented-out-tests */
const request = require('supertest')
const server = require('../server')
const db = require('../db/users')
jest.mock('../db/users')
const { getAdminToken } = require('./mockToken')

const testAuthAdminHeader = {
  Authorization: `Bearer ${getAdminToken()}`
}

test('GET User details returns all details', () => {
  db.getUserDetails.mockImplementation(() => {
    return Promise.resolve({ id: 123 })
  })
  return request(server)
    .get('/api/v1/users/4')
    .set(testAuthAdminHeader)
    .then((response) => {
      expect(response.status).toBe(200)
      expect(response.body).not.toBe({})
      expect(response.body.id).toBe(123)
      return null
    })
})

test('UPDATE order active status', () => {
  db.activateOrder.mockImplementation(() => {
    return Promise.resolve({ order_active: 1 })
  })
  return request(server)
    .patch('/api/v1/users/4')
    .set(testAuthAdminHeader)
    .then((orderStatus) => {
      expect(orderStatus.status).toBe(200)
      expect(orderStatus.body.order_active).toBe(1)
      return null
    })
})

test('UPDATE User details', () => {
  db.updateUserDetails = jest.fn()
  db.updateUserDetails.mockImplementation(() => {
    return Promise.resolve({
      id: 2,
      first_name: 'Zahira',
      last_name: 'Champion',
      business_name: 'CookSavvy',
      address_street: '1A Lilac Hwy',
      address_suburb: 'CBD',
      address_city: 'Auckland',
      product: 'fat',
      containers: 'drum'
    })
  })
  return request(server)
    .patch('/api/v1/users/2/update')
    .then((updateDetails) => {
      expect(updateDetails.status).toBe(200)
      expect(updateDetails.body.first_name).toBe('Zahira')
      expect(updateDetails.body.address_street).toBe('1A Lilac Hwy')
      expect(updateDetails.body.product).toBe('fat')
      return null
    })
})

test('POST adding new user', () => {
  db.addUser = jest.fn()
  db.addUser.mockImplementation(() => {
    return Promise.resolve()
  })
  const userData = {}
  return request(server)
    .post('/api/v1/users')
    .send(userData)
    .then((response) => {
      expect(response.status).toBe(201)
      return null
    })
})
