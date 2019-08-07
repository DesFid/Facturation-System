
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('products', function (table) {
        table.increments('id').unsigned().primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.float('price').notNullable();
        table.timestamps(true, true);
       
    })
};

exports.down = function(knex) {
    return knex.raw('DROP TABLE products CASCADE');
};
