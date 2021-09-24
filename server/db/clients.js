const connection = require('./connection')

module.exports = {
  addUser,
  getCustomerDetails,
  activateOrder
}

function addUser (newUser, db = connection) {
  const { firstName, lastName, businessName, address, suburb, city, product } = newUser
  const addNewUser = {
    first_name: firstName,
    last_name: lastName,
    business_name: businessName,
    address_street: address,
    address_suburb: suburb,
    address_city: city,
    product: product
  }
  return db('clients')
    .insert(addNewUser)
    .then(id => {
      return {
        id: id,
        firstName,
        lastName,
        businessName,
        address,
        suburb,
        city,
        product

      }
    })
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

function activateOrder (id, db = connection) {
  return db('clients')
    .where('id', id)
    .update({
      order_active: 1 // 0 is false, 1 is true
    })
    .then(() => getCustomerDetails(id, db))
}
