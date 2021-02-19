exports.up = function (knex) {
    return knex.schema.createTable('registered_time', (table) => {
        table.increments('id')
        table.integer('user_id').notNullable().unsigned()
        table.dateTime('time_registered').notNullable()
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.boolean('is_deleted').default(false)
        table.foreign('user_id').references('id').inTable('user')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('registered_time')
};
