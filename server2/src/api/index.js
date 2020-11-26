const api = require('express').Router();
const qnA = require('./qnA');
const circle = require('./circle');

api.use('/qnA', qnA);
api.use('/circle', circle);

module.exports = api;