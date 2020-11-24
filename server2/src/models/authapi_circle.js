module.exports = (sequelize, DataTypes) => {
    const authapi_circle = sequelize.define('authapi_circle', {
      id : {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      school : {
        type : DataTypes.STRING(255),
        allowNull: true,
      },
      poperty : {
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      introduce : {
        type : DataTypes.STRING(255),
        allowNull: false,
      }
    }, {
      timestamps: true,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
    })
    return authapi_circle;
};