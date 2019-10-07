const db = require('../db/connection');
exports.removeHouse = ({ house_id }) => {
  return db('houses')
    .where({ house_id })
    .del()
    .then(delCount => {
      if (delCount) return;
      else return Promise.reject({ status: 404, msg: 'house not found' });
    });
};

exports.selectHouses = ({ limit = 2, animal }) => {
  return db
    .select('houses.*')
    .from('houses')
    .leftJoin('wizards', 'houses.house_id', '=', 'wizards.house_id')
    .groupBy('houses.house_id')
    .limit(limit)
    .count('wizards.wizard_id as wizard_count')
    .modify(currQuery => {
      if (animal) currQuery.where({ animal });
    })
    .then(houses => {
      return houses.map(({ wizard_count, ...restOfHouse }) => {
        return { ...restOfHouse, wizard_count: +wizard_count };
      });
    });
};
