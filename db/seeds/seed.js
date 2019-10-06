const { houseData, wizardData } = require('../data/index');

exports.seed = knex => {
  return knex.migrate.rollback().then(() => knex.migrate.latest());
};
