module.exports = (sequelize, DataTypes) => {
    const authapi_circle = sequelize.define('authapi_circle', {
      id : {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      circleName : {
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      school_name : {
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      property : {
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      introduce : {
        type : DataTypes.STRING(255),
        allowNull: false,
      }
    }, {
      timestamps: false,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
      tableName:'authapi_circle',
    })
    return authapi_circle;
};