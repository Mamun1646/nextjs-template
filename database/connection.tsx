import { Sequelize } from "sequelize";

const Connection = new Sequelize('mamun', 'root', "", {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  

  const testConnection=async()=>{
    try {
      await Connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
}}
testConnection();

export default Connection;