const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../db/index");

const User = sequelize.define(
    "User",
    {
        id : {
            type: Sequelize.STRING(50),
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        // 在这里定义模型属性
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null,
        },
        lastName: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true, //强制表名称等于模型名称
        tableName: 'User', //直接提供表名
        timestamps: true , //时间戳
    }
);

// User.sync();
module.exports = User;
