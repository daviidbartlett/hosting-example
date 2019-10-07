const { removeHouse, selectHouses } = require('../models/houses-models');
exports.deleteHouseById = (req, res, next) => {
  removeHouse(req.params)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

exports.getHouses = (req, res, next) => {
  selectHouses()
    .then(houses => {
      res.status(200).send({ houses });
    })
    .catch(next);
};
