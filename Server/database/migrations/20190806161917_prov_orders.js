
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('orders_providers', function (table) {
        table.increments('id').unsigned().primary();
        table.string('nif').notNullable().unique();
        table.integer('product_id').references('id').inTable('products').notNullable();
        table.integer('quantity').notNullable();
        table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('orders_providers');
};
