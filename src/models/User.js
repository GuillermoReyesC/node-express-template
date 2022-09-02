const { DataTypes } = require("sequelize");

const conn = require("src/adapters/orm");

const Users = conn.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rut: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        tableName: "users",
    }
);



module.exports = Users;
