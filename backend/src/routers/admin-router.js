import express from "express";
import { getAllUsers } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.route('/viewUsers').get(authMiddleware, getAllUsers);

export default router;
