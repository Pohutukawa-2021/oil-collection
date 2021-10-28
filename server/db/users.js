const connection = require('./connection')

module.exports = {
  getUserDetails,
  activateOrder,
  updateUserDetails,
  addUser
}

function getUserDetails (id, db = connection) {
  return db('users')
    .where('auth0_id', id)
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
      'order_active as orderActive',
      'order_timestamp as orderTimeStamp',
      'admin'
    )
    .first()
}

function activateOrder (id, db = connection) {
  return db('users')
    .where('auth0_id', id)
    .update({
      order_active: true, // 0 is false, 1 is true
      order_timestamp: new Date().toLocaleString()
    })
    .then(() => getUserDetails(id, db))
}

function updateUserDetails (userDetails, db = connection) {
  const updateObject = {
    first_name: userDetails.firstName,
    last_name: userDetails.lastName,
    business_name: userDetails.businessName,
    address_street: userDetails.addressStreet,
    address_suburb: userDetails.addressSuburb,
    address_city: userDetails.addressCity,
    product: userDetails.product,
    containers: userDetails.containers,
    order_active: userDetails.orderActive
  }
  return db('users')
    .where('auth0_id', userDetails.auth0Id)
    .update(updateObject)
    .then(() => {
      return null
    })
}

function addUser (newUser, db = connection) {
  const { firstName, lastName, businessName, addressStreet, addressSuburb, addressCity, product, auth0Id, containers, price } = newUser
  const addNewUser = {
    first_name: firstName,
    last_name: lastName,
    business_name: businessName,
    address_street: addressStreet,
    address_suburb: addressSuburb,
    address_city: addressCity,
    product: product,
    containers,
    auth0_id: auth0Id,
    order_active: false,
    price
  }
  return db('users')
    .insert(addNewUser)
    .then(() => {
      return null
    })
}
