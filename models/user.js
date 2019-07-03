module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      name: DataTypes.STRING,
      avatar: DataTypes.STRING
      });
    return User;
  };
  