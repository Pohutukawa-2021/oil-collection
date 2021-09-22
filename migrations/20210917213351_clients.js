exports.up = (knex) => {
  return knex.schema.createTable('clients', (table) => {
    table.increments('id')
    table.string('fist_name')
    table.string('last_name')
    table.string('business_name')
    table.string('address_street')
    table.string('suburb')
    table.string('city')
    table.string('product')
    table.string('containers')
    table.integer('price')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('clients')
}
