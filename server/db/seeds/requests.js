exports.seed = (knex) => {
  return knex('collection_requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('collection_requests').insert([
        { id: 201, user_id: 1 },
        { id: 202, user_id: 2 },
        { id: 203, user_id: 3 }
      ])
    })
}
