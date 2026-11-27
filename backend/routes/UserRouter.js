import { Router } from "express";
import { CreateAccount, Login } from "../controllers/UserController.js";

const router = Router();

router.post("/createAccountPage", CreateAccount);
router.post("/login", Login);


export default router;