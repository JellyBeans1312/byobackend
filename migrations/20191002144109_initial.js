
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('directors', (table) => {
      table.increments('id').primary()
      table.string('first_name')
      table.string('last_name')

      table.timestamps(true, true)
    }),
    
    knex.schema.createTable('movies', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('year')
      table.string('actor')
      table.string('actress')
      table.string('genre')
      table.integer('directors_id').unsigned()
      table.foreign('directors_id').references('directors.id')

      table.timestamps(true, true)
    })
  ])

};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('movies'),
    knex.schema.dropTable('directors')
  ])
};
