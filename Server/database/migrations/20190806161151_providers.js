
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('providers', function (table) {
    table.increments('id').unsigned().primary();
    table.string('nif').notNullable().unique();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.raw('DROP TABLE providers CASCADE');
};
