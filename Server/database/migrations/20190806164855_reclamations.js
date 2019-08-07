
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('reclamations', function (table) {
        table.increments('id').unsigned().primary();
        table.string('article').notNullable();
        table.integer('products_id').references('id').inTable('products').notNullable();
        table.float('initial_price').notNullable();
        table.float('price_paid').notNullable();
        table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('reclamations');
};
