exports.up = knex => {
  return knex.schema.alterTable('users', table => {
    table.boolean('admin')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
