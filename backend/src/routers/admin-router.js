import express from "express";
import { getAllUsers,deleteUserById,getUserById,updateUserById } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router();

router.route('/viewUsers').get(authMiddleware,adminMiddleware, getAllUsers);


router.route('/viewUsers/editUser/:id').get(authMiddleware,adminMiddleware, getUserById);


router.route('/viewUsers/editUser/:id').patch(authMiddleware,adminMiddleware, updateUserById);


//delete route
router.route('/viewUsers/deleteUser/:id').delete(authMiddleware,adminMiddleware,deleteUserById)

export default router;
