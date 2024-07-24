
const errorHandler = require("../middlewares/errorMiddleware");
const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");

exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check for existing email
    const existingEmail = await userModel.findOne({ email: email });
    if (existingEmail) {
      return next(new errorResponse("Email Id already exists", 500));
    }

    // Create user
    const user = await userModel.create({ username, email, password });
    this.sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new errorResponse("Please provide all details", 400));
    }

    // Find user by email
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return next(new errorResponse("Invalid Credentials", 404));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Credentials", 404));
    }

    this.sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({ success: true, message: "Logout Successfully" });
};

// module.exports = { registerController, loginController, logoutController, sendToken };
