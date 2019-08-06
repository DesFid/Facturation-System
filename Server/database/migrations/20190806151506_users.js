exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').unsigned().primary();
        table.string('dni').notNullable().unique();
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('zip_code').notNullable();
        table.string('phone').notNullable();
        table.integer('second_phone').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('users');
};