import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterUser, registerUser);
router.post("/login", validateLoginUser, loginUser);

export default router;
