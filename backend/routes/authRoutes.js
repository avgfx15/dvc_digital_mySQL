// | import express
import express from "express";

// | import authControllers
import { authSignUpController } from "../controllers/authControllers.js";

// @ authRoute variable
const authRoute = express.Router();

// ` Configure Routes

// + authSignUp
authRoute.post("/signup", authSignUpController);

// ~ Export authRoute

export default authRoute;
