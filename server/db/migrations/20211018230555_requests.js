exports.up = (knex) => {
  return knex.schema.createTable('collection_requests', (table) => {
    table.increments('id').primary()
    table.integer('client_id').references('clients.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('collection_requests')
}
