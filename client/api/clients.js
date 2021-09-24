import request from 'superagent'

export function getCustomerDetails (id) {
  return request.get('/api/v1/clients/' + id)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/clients'))
}

export function addOrder (order) {
  return request.post('/api/v1/clients/order')
    .send(order)
    .then((res) => res.body)
    .catch(errorHandler('POST', '/api/v1/clients/order'))
}

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
