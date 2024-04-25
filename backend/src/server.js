import express from "express";
import router from "./routers/auth-router.js"
import connectDB from "../utils/db.js";

const app=express();

app.use(express.json());

app.use("/api/auth",router);

const PORT=3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port : ${PORT }`);
    })
});