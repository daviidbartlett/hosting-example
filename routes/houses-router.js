const housesRouter = require('express').Router();
const { deleteHouseById } = require('../controllers/houses-controllers');

housesRouter.route('/:house_id').delete(deleteHouseById);
module.exports = housesRouter;
