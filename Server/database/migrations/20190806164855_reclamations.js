
exports.up = function(knex) {
    return knex.schema.createTable('reclamations', function (table) {
        table.increments('id').unsigned().primary();
        table.string('article').notNullable();
        table.string('products_id').references('id').inTable('products').notNullable();
        table.float('initial_price').notNullable();
        table.float('price_paid').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('reclamations');
};
