const db = require('../db/connection');
exports.removeHouse = ({ house_id }) => {
  return db('houses')
    .where({ house_id })
    .del();
};
