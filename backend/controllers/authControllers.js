import { ErrorHandler } from "../utility/errorHandlerMiddleware.js";

// + Add New USer Controller
export const authSignUpController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    return next(new ErrorHandler(401, "Please give input"));
  } catch (error) {
    return next(error);
  }
};
