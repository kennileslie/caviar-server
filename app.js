const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');
const globalErrorHandler = require('./controllers/errorController');

const AppError = require('./utils/appError');

const app = express();

app.use(cors('*'));
app.get('/', (req, res) => {
  res.json({ name: 'Caviar Honey API', v: 'v0.0.0' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (_req, _res, next) => next(new AppError('Url not found', 404)));
app.use(globalErrorHandler);

module.exports = app;
