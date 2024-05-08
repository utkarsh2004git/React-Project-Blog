import express from "express";
import { getAllUsers,deleteUserById } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router();

router.route('/viewUsers').get(authMiddleware,adminMiddleware, getAllUsers);


//delete route
router.route('/viewUsers/deleteUser/:id').delete(authMiddleware,adminMiddleware,deleteUserById)

export default router;
