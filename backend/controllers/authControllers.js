// | import ErrorHandelr
import { ErrorHandler } from "../utility/errorHandlerMiddleware.js";

// | import dbConnection
import connectToDatabase from "../config/dbConnect.js";

const db = await connectToDatabase();

// | import bcrypt
import bcrypt from "bcryptjs";

// | import jsonwebtoken
import jwt from "jsonwebtoken";

// + Add New USer Controller

export const authSignUpController = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("1");

    // 1. Check if user with the given email already exists
    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    console.log("2");

    if (existingUser.length > 0) {
      return res.status(400).json({
        // 400 Bad Request
        message: "User with this email already exists",
        success: false,
      });
    }

    // 2. If user doesn't exist, proceed with creation (as before)
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    const [newUser] = await db.execute(
      "SELECT email, id FROM users WHERE id = ?",
      [result.insertId]
    );

    if (newUser.length === 0) {
      return res.status(500).json({
        message: "Error fetching the newly created user",
        success: false,
      });
    }

    res.status(200).json({
      message: "User created successfully",
      success: true,
      newSavedUser: newUser[0],
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to Create new user" });
  }
};
