import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterUser, registerUser);
router.post("/login", validateLoginUser, loginUser);
router.get("/logout", logoutUser);

export default router;
