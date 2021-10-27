import request from 'superagent'

export function getClientDetails (id, token) {
  return request.get('/api/v1/users/' + id)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/users'))
}

export function addOrder (id) {
  return request.patch(`/api/v1/users/${id}`)
    .send(id)
    .then(res => { return res.body })
    .catch(errorHandler('PATCH', '/api/v1/users'))
}

export function addUser (user, token) {
  return request.post('/api/v1/users')
    .set('authorization', `Bearer ${token}`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/users'))
}

export function updateClientDetails (clientDetails, token) {
  return request.patch('api/v1/users/' + clientDetails.auth0Id + '/update')
    .send(clientDetails)
    .then(res => { return res.body })
    .catch(errorHandler('PATCH', '/api/v1/users/:id/update'))
}

function errorHandler (method, route) {
  return (err) => {
    console.log(err)
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
