import express from "express";
import authcontrollers from "../controllers/auth-controller.js";



const router=express.Router();

router.route("/").get(authcontrollers.home);


router.route("/register").post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);


export default  router;