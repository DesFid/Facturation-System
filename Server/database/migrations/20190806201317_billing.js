
exports.up = function(knex) {
    return knex.schema.createTable('billing', function (table) {
        table.increments('id').unsigned().primary();
        //table.integer('products_id').references('id').inTable('products').notNullable();
        table.integer('costumer_orders_id').references('id').inTable('costumer_orders').notNullable();
        table.timestamp('date_delivery').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('billing');
};
