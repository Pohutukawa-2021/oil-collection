import request from 'superagent'

export function addUser (user) {
  return request.post('/api/v1/register')
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/register'))
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
