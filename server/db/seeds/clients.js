exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(() => {
      // Inserts seed entries
      return knex('clients').insert([
        { id: 1, fist_name: 'Jared', last_name: 'Pinfold', business_name: 'JP Bakery', address_street: '3 Eda st', suburb: 'CBD', city: 'Auckland', product: 'oil', containers: 'tank', price: '0.3' },
        { id: 2, fist_name: 'Prue', last_name: 'Teacher', business_name: 'Kombucha Sour', address_street: '10 Scoby ave', suburb: 'Takapuna', city: 'Auckland', product: 'oil', containers: 'wb100', price: '0.25' },
        { id: 3, fist_name: 'Don', last_name: 'Smith', business_name: 'The Don', address_street: '1A High st', suburb: 'CBD', city: 'Auckland', product: 'oil', containers: 'wb180', price: '0.20' },
        { id: 4, fist_name: 'Eleanor', last_name: 'Hipster', business_name: 'Hipster Dairy', address_street: '22 Uphill st', suburb: 'Happy Valley', city: 'Wellington', product: 'fat', containers: 'drum', price: '0.15' },
        { id: 5, fist_name: 'Ahmed', last_name: 'Saviour', business_name: 'Kwait Deli', address_street: '37 Helper Hwy', suburb: 'Chartwell', city: 'Hamilton', product: 'fat', containers: 'drum', price: '0.15' }
      ])
    })
}
