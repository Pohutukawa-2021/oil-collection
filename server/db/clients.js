const connection = require('./connection')

module.exports = {
  getClientDetails,
  activateOrder,
  updateClientDetails,
  addUser
}

function getClientDetails (id, db = connection) {
  return db('clients')
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
      'order_active as orderActive'
    )
    .first()
}

function activateOrder (id, db = connection) {
  return db('clients')
    .where('auth0_id', id)
    .update({
      order_active: 1 // 0 is false, 1 is true
    })
    .then(() => getClientDetails(id, db))
}

function updateClientDetails (clientDetails, db = connection) {
  const updateObject = {
    first_name: clientDetails.first_name,
    last_name: clientDetails.last_name,
    business_name: clientDetails.business_name,
    address_street: clientDetails.address_street,
    address_suburb: clientDetails.address_suburb,
    address_city: clientDetails.address_city,
    product: clientDetails.product,
    containers: clientDetails.containers
  }
  return db('clients')
    .where('id', clientDetails.id)
    .update(updateObject)
    .then(() => {
      return updateObject
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
