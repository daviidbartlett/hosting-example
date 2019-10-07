exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
};

exports.handlePsqlErrors = (err, req, res, next) => {
  const errorCodes = {
    '22P02': { status: 400, msg: 'bad request' }
  };
  if (errorCodes[err.code]) {
    const { status, msg } = errorCodes[err.code];
    res.status(status).send({ msg });
  } else next(err);
};

exports.handle500 = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'internal server error' });
};
