import request from 'superagent'

export function getClientDetails (id, token) {
  return request.get('/api/v1/clients/' + id)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/clients'))
}

export function addOrder (id) {
  return request.patch(`/api/v1/clients/${id}`)
    .send(id)
    .then(res => { return res.body })
    .catch(errorHandler('PATCH', '/api/v1/clients'))
}

export function addUser (user) {
  return request.post('/api/v1/clients')
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/clients'))
}

export function updateClientDetails (clientDetails) {
  console.log(clientDetails.id)
  return request.patch('api/v1/clients/' + clientDetails.id + '/update')
    .send(clientDetails)
    .then(res => { return res.body })
    .catch(errorHandler('PATCH', '/api/v1/clients/:id/update'))
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
