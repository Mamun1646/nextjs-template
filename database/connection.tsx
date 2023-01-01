import { Sequelize } from "sequelize";

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSRORD;
const host = process.env.DB_HOST;

const Connection = new Sequelize(database, username, password, {
  host,
  dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

const testConnection = async () => {
  try {
    await Connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testConnection();

export default Connection;
