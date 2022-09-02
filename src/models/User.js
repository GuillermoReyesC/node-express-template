const {DataTypes } = require("sequelize");

const { conn } = require("src/adapters");
 
const user  = conn.define("user", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [1, 255]
        },
    },
    user_lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
            },
    },
    user_rut: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        },
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true,
            len: [1, 255]
            },
    },
    credit_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            notEmpty: true,
            isInt: true,
            len: [1, 255]
        },
    }
});

module.exports = user;
    