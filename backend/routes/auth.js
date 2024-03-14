import express from "express";
import {
  forgotPassword,
  getUserProfile,
  loginUser,
  logout,
  registerUser,
  resetPassword,
} from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserProfile);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

export default router;
