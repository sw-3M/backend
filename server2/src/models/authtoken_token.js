module.exports = (sequelize, DataTypes) => {
    const authtoken_token = sequelize.define('authtoken_token', {
      key : {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
      },
      created : {
          type : DataTypes.DATE(6),
          allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
    })
    return authtoken_token;
};