module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    name: DataTypes.STRING,
    entries: DataTypes.INTEGER,
    link: DataTypes.STRING
  });
  return Example;
};
