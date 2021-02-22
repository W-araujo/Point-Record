require('dotenv').config()

const { DB_CLIENT, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env

module.exports = {
  development: {
    client: DB_CLIENT,
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    }
  },
};
