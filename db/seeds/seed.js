const { houseData, wizardData } = require('../data/index');
const { createRef, formatWizards } = require('../../utils/');
exports.seed = knex => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex('houses')
        .insert(houseData)
        .returning('*');
    })
    .then(houseRows => {
      const houseRef = createRef(houseRows, {
        key: 'house_name',
        value: 'house_id'
      });
      const formattedWizards = formatWizards(wizardData, houseRef);
      return knex.insert(formattedWizards).into('wizards');
    });
};
