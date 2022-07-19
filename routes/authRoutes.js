import {
  register,
  login,
  updateUser,
  getGuestAccount,
} from "../controllers/authController.js";
import express from "express";
import authenticateUser from "../middleware/auth.js";

const authRouter = express.Router();
authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/updateUser").patch(authenticateUser, updateUser);
authRouter.route("/guestAccount").get(getGuestAccount);
export default authRouter;
