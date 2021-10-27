exports.up = (knex) => {
  return knex.schema.createTable('collection_requests', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('user.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('collection_requests')
}
