const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '..'))
const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    root: rootPath,
    port: process.env.PORT,
    db: {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
    },
    env,
  },

  test: {
    root: rootPath,
    port: process.env.PORT,
    db: {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
    },
    env,
  },

  production: {
    root: rootPath,
    port: process.env.PORT,
    db: {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
    },
    env,
  },
}

module.exports = config[env]
