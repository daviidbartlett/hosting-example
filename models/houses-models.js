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
