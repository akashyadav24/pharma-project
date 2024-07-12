const express = require('express');
const requestValidator = require('express-validator');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const result = dotenv.config();

const mongodb = require('./db/index');
if (result.error) {
  throw result.error;
}

// custom modules
const { ErrorLogger } = require('./utils');
const { logger } = require('./utils');
const allRoutes = require('./routes');

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(
  morgan('dev', {
    skip: () => app.get('env') === 'test',
    stream: logger.stream,
  }),
);
app.use(requestValidator());


app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Welcome to User Pharmacy Services',
  });
});

app.listen(PORT, () => logger.info(`App running at http://localhost:${PORT}`));

app.use(allRoutes);
app.use(ErrorLogger)   

module.exports = app;

