const housesRouter = require('express').Router();
const {
  deleteHouseById,
  getHouses
} = require('../controllers/houses-controllers');

housesRouter.route('/:house_id').delete(deleteHouseById);

housesRouter.route('/').get(getHouses);
module.exports = housesRouter;
