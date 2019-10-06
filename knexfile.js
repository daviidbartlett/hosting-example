const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfigs = {
  development: { connection: { database: 'harry_potter' } },
  test: { connection: { database: 'harry_potter_test' } }
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
