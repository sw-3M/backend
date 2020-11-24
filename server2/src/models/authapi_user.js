module.exports = (sequelize, DataTypes) => {
    const authapi_user = sequelize.define('authapi_user', {
      id : {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      password : {
        type : DataTypes.STRING(128),
        allowNull: false,
      },
      last_login : {
        type : DataTypes.DATE(6),
        allowNull: false,
      },
      is_superuser : {
        type : DataTypes.BOOLEAN,
        allowNull: false,
      },
      username : {
        type : DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      email : {
        type : DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      phone : {
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      school : {
        type : DataTypes.STRING(255),
        allowNull: true,
      },
      is_verified : {
        type : DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_active : {
        type : DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_staff : {
        type : DataTypes.BOOLEAN,
        allowNull: false,
      },
      facebook : {
        type : DataTypes.STRING(255),
        allowNull: true,
      },
      kakao : {
        type : DataTypes.STRING(255),
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
    })
    return authapi_user;
};