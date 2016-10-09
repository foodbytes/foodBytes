if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

let dbConnection = `${ process.env.DATABASE_URL }?ssl=true`

module.exports = {

  development: {
    client: 'pg',
    connection: dbConnection,
    migrations:{
      directory: './database/migrations'
    },
    seeds:{
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    }
  }

};
