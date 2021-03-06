const ENV = process.env.NODE_ENV || 'development';

const testData = require('./test-data');
const devData = require('./dev-data');

const data = {
  test: testData,
  development: devData
};

module.exports = data[ENV];
