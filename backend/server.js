// | Import Packages
// | Import express
import express from "express";

// |import morgan
import morgan from "morgan";

// | import dotenv
import dotenv from "dotenv";

// | import cors
import cors from "cors";

// | import Database base Connection dbConnect
import { dbConnect } from "./config/dbConnect.js";

// | import console.log Style With chalk
import { successLog, errorLog, infoLog } from "./utility/stylistLog.js";

// | import authRoute
import authRoute from "./routes/authRoutes.js";

// | import errorHandler
import { errorHandlerMiddleware } from "./utility/errorHandlerMiddleware.js";

// ` dotenv configure
dotenv.config();

// @ app variable
const app = express();

// @ Port variable
const port = process.env.PORT || 3000;

// ` JSON data
app.use(express.json());

// ` cors configure
app.use(cors());

// ` morgan middleware
app.use(
  morgan(
    ":date[web] :method :url :status :res[content-length] - :response-time ms"
  )
);

// ` Routes Configure
app.use("/api/v1/auth", authRoute);

// ` default api
app.get("/", (req, res) => res.send("Hello World!"));

// ` ErrorHandler configure
app.use(errorHandlerMiddleware);

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
