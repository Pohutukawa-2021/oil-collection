const connection = require('./connection')

module.exports = {
  addUser
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
