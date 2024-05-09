import express from "express";
import { getAllUsers,deleteUserById,getUserById,updateUserById,addPost,getAllPosts } from "../controllers/admin-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router();

router.route('/viewUsers').get(authMiddleware,adminMiddleware, getAllUsers);
router.route('/yourPosts').get(authMiddleware,adminMiddleware, getAllPosts);


router.route('/viewUsers/editUser/:id').get(authMiddleware,adminMiddleware, getUserById);


router.route('/viewUsers/editUser/:id').patch(authMiddleware,adminMiddleware, updateUserById);


//delete route
router.route('/viewUsers/deleteUser/:id').delete(authMiddleware,adminMiddleware,deleteUserById)




//for post
router.route('/addPost').post(authMiddleware,adminMiddleware, addPost);


export default router;
