
exports.up = function(knex) {
    return knex.schema.createTable('orders_providers', function (table) {
        table.increments('id').unsigned().primary();
        table.string('nif').notNullable().unique();
        table.string('product_id').references('id').inTable('products').notNullable();
        table.integer('quantity').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('orders_providers');
};
