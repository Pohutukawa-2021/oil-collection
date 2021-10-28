exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Jared',
          last_name: 'Pinfold',
          auth0_id: '',
          business_name: 'JP Bakery',
          address_street: '3 Eda st',
          address_suburb: 'CBD',
          address_city: 'Auckland',
          product: 'oil',
          containers: 'tank',
          price: '0.3',
          order_active: false,
          admin: false
        },
        {
          id: 2,
          first_name: 'Prue',
          last_name: 'Teacher',
          auth0_id: '',
          business_name: 'Kombucha Sour',
          address_street: '10 Scoby ave',
          address_suburb: 'Takapuna',
          address_city: 'Auckland',
          product: 'oil',
          containers: 'wb100',
          price: '0.25',
          order_active: false,
          admin: false
        },
        {
          id: 3,
          first_name: 'Don',
          last_name: 'Smith',
          auth0_id: '',
          business_name: 'The Don',
          address_street: '1A High st',
          address_suburb: 'CBD',
          address_city: 'Auckland',
          product: 'oil',
          containers: 'wb180',
          price: '0.20',
          order_active: false,
          admin: false
        },
        {
          id: 4,
          first_name: 'Eleanor',
          last_name: 'Hipster',
          auth0_id: '',
          business_name: 'Hipster Dairy',
          address_street: '22 Uphill st',
          address_suburb: 'Happy Valley',
          address_city: 'Wellington',
          product: 'fat',
          containers: 'drum',
          price: '0.15',
          order_active: false,
          admin: false
        },
        {
          id: 5,
          first_name: 'Ahmed',
          last_name: 'Saviour',
          auth0_id: 'auth0|614bc653d42a69006aa03751',
          business_name: 'Kwait Deli',
          address_street: '37 Helper Hwy',
          address_suburb: 'Chartwell',
          address_city: 'Hamilton',
          product: 'fat',
          containers: 'drum',
          price: '0.15',
          order_active: false,
          admin: false
        }
      ])
    })
}
