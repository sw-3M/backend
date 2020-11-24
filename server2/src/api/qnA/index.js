const api = require('express').Router();
const qnACtrl = require('./qnA.ctrl');

api.get('/viewMentor', qnACtrl.viewMentor);

module.exports = api;