// | Import mysql
import mysql from "mysql2";

// | import dotenv
import dotenv from "dotenv";

// ` dotenv configure
dotenv.config();

// @ dbConfig variable
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// & Create connection function
export const dbConnect = mysql.createConnection(dbConfig);
