// src/app.js

const express = require('express');
const logger = require('./middleware/logger');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Use middleware
app.use(logger);

// Use routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
