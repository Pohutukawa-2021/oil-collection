import request from 'superagent'

export function fetchClients (token) {
  return request.get('/api/v1/admin')
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(errorHandler('GET', '/api/v1/admin'))
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
