
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('billing', function (table) {
        table.increments('id').unsigned().primary();
        //table.integer('products_id').references('id').inTable('products').notNullable();
        table.integer('costumer_orders_id').references('id').inTable('customer_orders').notNullable();
        table.timestamp('date_delivery').notNullable();
        table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('billing');
};
