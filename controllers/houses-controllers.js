const { removeHouse } = require('../models/houses-models');
exports.deleteHouseById = (req, res, next) => {
  removeHouse(req.params)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};
