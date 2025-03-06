// | Import Packages
// | Import express
import express from "express";

// |import morgan
import morgan from "morgan";

// | import dotenv
import dotenv from "dotenv";

// | import Database base Connection dbConnect
import { dbConnect } from "./config/dbConnect.js";

// | import console.log Style With chalk
import { successLog, errorLog, infoLog } from "./utility/stylistLog.js";

// ` dotenv configure
dotenv.config();

// @ app variable
const app = express();

// @ Port variable
const port = process.env.PORT || 3000;

// ~ morgan middleware
app.use(
  morgan(
    ":date[web] :method :url :status :res[content-length] - :response-time ms"
  )
);

// ` default api
app.get("/", (req, res) => res.send("Hello World!"));

// % app listen function
app.listen(port, () => {
  dbConnect.connect(function (err) {
    if (err) throw err;
    else {
      infoLog("Database Connected Successfully!");
    }
    successLog(`Example app listening on port ${port}!`);
  });
});
