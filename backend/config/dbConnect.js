// | Import mysql
import mysql from "mysql2/promise";

// | import dotenv
import dotenv from "dotenv";
import { errorLog, successLog } from "../utility/stylistLog.js";

// ` dotenv configure
dotenv.config();

// @ dbConfig variable
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
};

// ~ Create connection & export
const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    successLog("Database Connection Successfull!!!");
    return connection;
  } catch (error) {
    errorLog("Error to Connect With Database!!!");
  }
};

export default connectToDatabase;
