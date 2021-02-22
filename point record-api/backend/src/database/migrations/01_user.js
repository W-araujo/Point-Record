exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('name', 100).notNullable()
    table.string('email', 150).unique().notNullable()
    table.string('password', 150).notNullable()
    table.string('role', 3).notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    table.boolean('is_deleted').default(false)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('user')
};
