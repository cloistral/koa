const { Sequelize } = require("sequelize");
const dbConfig = {
  database: "node_database",
  username: "root",
  password: "123456",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    // idle: 30000,
    // acquire: 60000
  }
};
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
  }
);
// await sequelize.sync({ force: true });
module.exports = sequelize


