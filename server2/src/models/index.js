const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/conifg.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.authapi_user = require('./authapi_user')(sequelize, Sequelize);
db.authtoken_token = require('./authtoken_token')(sequelize, Sequelize);
db.authapi_circle = require('./authapi_circle.js')(sequelize, Sequelize);

db.authtoken_token.belongsTo(db.authapi_user, {foreignKey: 'user_id'});

module.exports = db;