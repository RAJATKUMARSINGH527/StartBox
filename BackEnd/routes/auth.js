const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");


const userRouter = express.Router();



userRouter.post("/", async (req, res) => {
  //logic
  try {
    const { name, email, password } = req.body;
    //environment variables always return string so we need to convert it to number
    bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS),
      async (err, hash) => {
        if (err) {
          res.json({ err });
        }
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res
          .status(201)
          .send({
            message: "You have been Successfully Registered!",
          });
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});



userRouter.post("/login", async (req, res) => {
  console.log("Login request received:", req.body); // ✅ Log request data

  const { email, password } = req.body;
  try {
    const matchingUser = await UserModel.findOne({ email });

    if (!matchingUser) {
      console.log("User not found!");  // ✅ Log this
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordMatched = await bcrypt.compare(password, matchingUser.password);
    if (!isPasswordMatched) {
      console.log("Invalid email or password!");  // ✅ Log this
      return res.status(400).json({ message: "Invalid email or password!" });
    }
    
    console.log("Generating Token...");
    const token = jwt.sign(
      { userId: matchingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    console.log("Login successful! Token generated:", token);  // ✅ Log token
    return res.status(200).json({ message: "You have been Successfully Logged in!", token });

  } catch (err) {
    console.error("Error during login:", err);  // ✅ Log errors
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});


