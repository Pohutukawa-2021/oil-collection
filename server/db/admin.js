const connection = require('./connection')

module.exports = {
  fetchAllClients
}

function fetchAllClients (db = connection) {
  return db('users')
    .select()
}
