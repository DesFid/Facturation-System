
exports.up = function(knex) {
    return knex.schema.createTable('customer_orders', function (table) {
        table.increments('id').unsigned().primary();
        table.integer('users_id').references('id').inTable('users').notNullable();
        table.integer('products_id').references('id').inTable('products').notNullable();
        table.integer('quantity').notNullable();
        table.timestamp('order_date').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('costumer_orders');
};
