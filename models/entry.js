// var sequelize = require ("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.import("./game");
    var User = sequelize.import("./user");
    var Entry = sequelize.define("entry", {
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Game,
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id"
            }
        },
        did_win: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    return Entry;
};
