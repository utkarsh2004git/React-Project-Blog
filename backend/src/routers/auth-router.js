import express from "express";
import {home, register,login } from "../controllers/auth-controller.js";



const router=express.Router();

router.route("/").get(home);


router.route("/register").get(register);

router.route("/login").get(login);


export default  router;