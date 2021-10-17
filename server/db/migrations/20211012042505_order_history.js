exports.up = (knex) => {
  return knex.schema.createTable('order_history', (table) => {
    table.increments('id').primary()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('order_history')
}
