const { DataTypes } = require("sequelize");

const conn = require("src/adapters/orm");
const User = require("./user")

const CreditRequest = conn.define(
    "CreditRequest",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fk_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        uf: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dues: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        tableName: "credit_request",
    }
);

CreditRequest.hasMany(User, {

    sourceKey: 'fk_user_id',
    foreignKey: {
        name: 'id'
    }
});


module.exports = CreditRequest;
