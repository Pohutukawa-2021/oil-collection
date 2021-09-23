const request = require('supertest')
const server = require('../server')
const db = require('../db/register')
jest.mock('../db/register')

test('POST adding new user', () => {
  db.addUser = jest.fn()
  db.addUser.mockImplementation(() => {
    return Promise.resolve()
  })
  const userData = {}
  return request(server)
    .post('/api/v1/register')
    .send(userData)
    .then((response) => {
      expect(response.status).toBe(201)
      return null
    })
})
