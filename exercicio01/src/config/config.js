const config = {
  username: 'root',
  password: 'password',
  host: 'db',
  dialect: 'mysql',
}

module.exports = {
  development: {
    ...config,
    database: 'database_development',
  },
  test: {
    ...config,
    database: 'database_tests',
  },
  production: {
    ...config,
    database: 'database_production',
  },
}

/* 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 */