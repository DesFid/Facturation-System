
exports.up = function(knex) {
    return knex.schema.createTable('delivery', function (table) {
        table.increments('id').unsigned().primary();
        table.string('article').notNullable();
        table.integer('orders_providers_id').references('id').inTable('orders_providers').notNullable();
        table.integer('quantity').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('delivery');
};
