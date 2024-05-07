import express from "express";
import { getAllUsers } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router();

router.route('/viewUsers').get(authMiddleware,adminMiddleware, getAllUsers);

export default router;
