
exports.up = function(knex) {
    return knex.schema.createTable('orders_providers', function (table) {
        table.increments('id').unsigned().primary();
        table.string('article').notNullable();
        table.string('orders_providers_id').references('id').inTable('orders_providers').notNullable();
        table.integer('quantity').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('orders_providers');
};
