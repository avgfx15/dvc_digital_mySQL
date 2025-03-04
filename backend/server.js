// ~ Import Packages
import express from "express";

import morgan from "morgan";

import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import { successLog, errorLog } from "./utility/stylistLog.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// & morgan middleware
app.use(
  morgan(
    ":date[web] :method :url :status :res[content-length] - :response-time ms"
  )
);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => {
  dbConnect.connect(function (err) {
    if (err) throw err;
    else {
      successLog("Database Connected Successfully!");
      console.log("DataBase Connected Successfully");
    }
    console.log(`Example app listening on port ${port}!`);
  });
});
