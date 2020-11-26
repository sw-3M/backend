const api = require('express').Router();
const circleCtrl = require('./circle.ctrl');

api.get('/viewCircle', circleCtrl.viewCircle);
api.post('/createCircle', circleCtrl.createCircle);
// api.post('/deleteCircle', circleCtrl.viewCircle);

module.exports = api;