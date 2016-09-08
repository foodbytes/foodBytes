// Update with your config settings.

// getting the DATABASE_URL from the env file

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();

}
let dbConnection = `${ process.env.DATABASE_URL }?ssl=true`;

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
  }

};
