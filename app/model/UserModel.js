const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../db/index");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue("password",value);
            },
            get(value) {
                return value;
            }
        },
        birthday : {
            type: DataTypes.DATE  ,
        },
        age : {
            type: DataTypes.INTEGER, 
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        duty: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        freezeTableName: true, //强制表名称等于模型名称
        tableName: "user_info", //直接提供表名
        timestamps: true ,//时间戳
        paranoid: true, //执行软删除操作  timestamps 需为true 否则不生效
    }
);
// User.sync({ force: true });
module.exports = User;
