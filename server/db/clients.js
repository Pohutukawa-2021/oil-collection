const connection = require('./connection')

module.exports = {
  getCustomerDetails,
  activateOrder,
  updateCustomerDetails,
  addUser
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

function updateCustomerDetails (customerDetails, db = connection) {
  const updateObject = {
    first_name: customerDetails.first_name,
    last_name: customerDetails.last_name,
    business_name: customerDetails.business_name,
    address_street: customerDetails.address_street,
    address_suburb: customerDetails.address_suburb,
    address_city: customerDetails.address_city,
    product: customerDetails.product,
    containers: customerDetails.containers
  }
  return db('clients')
    .where('id', customerDetails.id)
    .update(updateObject)
    .then(() => {
      return updateObject
    })
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
