import express from "express";
import router from "./routers/auth-router.js"
const app=express();

app.use("/api/auth",router);


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT }`);
})