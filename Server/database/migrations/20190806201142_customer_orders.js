
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('customer_orders', function (table) {
        table.increments('id').unsigned().primary();
        table.integer('users_id').references('id').inTable('clients').notNullable();
        table.integer('products_id').references('id').inTable('products').notNullable();
        table.integer('quantity').notNullable();
        table.timestamp('order_date').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('customer_orders');
};
