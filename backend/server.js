// ~ Import Packages
import express from "express";

import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => {
  dbConnect.connect(function (err) {
    if (err) throw err;
    else {
      console.log("DataBase Connected Successfully");
    }
    console.log(`Example app listening on port ${port}!`);
  });
});
