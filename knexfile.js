// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/',
    useNullAsDefault: true
  },
  migrations: {
    directory: './db/migrations'
  }
}