exports.up = knex => {
  return knex.schema.alterTable('clients', table => {
    table.boolean('admin')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('clients')
}
