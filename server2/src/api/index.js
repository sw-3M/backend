const api = require('express').Router();
const qnA = require('./qnA');

api.use('/qnA', qnA);

module.exports = api;