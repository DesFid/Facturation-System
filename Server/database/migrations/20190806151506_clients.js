exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('clients', function (table) {
        table.increments('id').unsigned().primary();
        table.string('dni').notNullable().unique();
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('zip_code').nullable();
        table.string('phone').notNullable();
        table.integer('second_phone').nullable();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.raw('DROP TABLE clients CASCADE');
};