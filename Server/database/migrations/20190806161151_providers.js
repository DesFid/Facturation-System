
exports.up = function(knex) {
    return knex.schema.createTable('providers', function (table) {
    table.increments('id').unsigned().primary();
    table.string('nif').notNullable().unique();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('providers');
};
