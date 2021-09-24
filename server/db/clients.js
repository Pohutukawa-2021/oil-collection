const connection = require('./connection')

module.exports = {
  getCustomerDetails,
  sendRequest
}

function getCustomerDetails (id, db = connection) {
  return db('clients')
    .where('id', id)
    .select(
      'id',
      'first_name as firstName',
      'last_name as lastName',
      'auth0_id as auth0Id',
      'business_name as businessName',
      'address_street as addressStreet',
      'address_suburb as addressSuburb',
      'address_city as addressCity',
      'product',
      'containers',
      'price',
      'order_active as orderActive'
    )
    .first()
}

function sendRequest (id, db = connection) {
  return db('clients')
    .where('id', id)
    .update({
      order_active: 1 // 0 is false, 1 is true
    })
    .then(() => getCustomerDetails(id, db))
}
