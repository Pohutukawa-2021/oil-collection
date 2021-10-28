exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('auth0_id')
    table.string('business_name')
    table.string('address_street')
    table.string('address_suburb')
    table.string('address_city')
    table.string('product')
    table.string('containers')
    table.integer('price')
    table.boolean('order_active')
    table.datetime('order_timestamp')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
