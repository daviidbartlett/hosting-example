const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router');
const { handleCustomErrors } = require('./errors/index');
app.use('/api', apiRouter);

app.use(handleCustomErrors);
module.exports = app;
