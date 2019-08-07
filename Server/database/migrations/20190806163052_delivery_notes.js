
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('delivery', function (table) {
        table.increments('id').unsigned().primary();
        table.string('article').notNullable();
        table.integer('orders_providers_id').references('id').inTable('orders_providers').notNullable();
        table.integer('quantity').notNullable();
        table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('delivery');
};
