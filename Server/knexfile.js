;
const databaseData = {
    client: process.env.CLIENT || 'pg',
    connection: process.env.CONNECTION_DB || {
        host: 'localhost',
        port: '5432',
        user: 'facturation_admin',
        password: '123456',
        database: 'facturation_db'
    }
};

module.exports = {
    development: {
        migrations: {tableName: 'knex_migrations', directory: './database/migrations'},
        seeds: {directory: './database/seeds'},
        client: databaseData.client,
        connection: databaseData.connection

    },
};