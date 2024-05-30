import express from "express";
import {
  updateRole,
  userSignup,
  userLogin,
  changeAccountStatus,
} from "../controllers/user.controller";
import { protectRoute, restrictTo } from "../middlewares/auth.middleware";
import { validateUser, validateUserLogin } from "../validations/user.validate";
import { userRole } from "../utils/variable.utils";

const userRoutes = express.Router();

userRoutes.post("/signup", validateUser, userSignup);
userRoutes.patch("/:id", protectRoute, restrictTo(userRole.admin), updateRole);
userRoutes.patch(
  "/change-account-status/:id",
  protectRoute,
  restrictTo(userRole.admin),
  changeAccountStatus
);

userRoutes.post("/login", validateUserLogin, userLogin);
export default userRoutes;
