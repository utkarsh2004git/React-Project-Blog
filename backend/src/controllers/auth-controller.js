import User from "../models/user-model.js";
import bcrypt from "bcryptjs"
const home= async(req,res)=>{
    try{
        res.status(200)
        .send(
            "Welcome to my server"
        );
    }
    catch(error){
        res.status(400).send({msg:"Page not found"})
    }
};

const register= async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const userExist= await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({msg:"user already Exist"});
        }

        const saltRound =10;
        const hash_password= await bcrypt.hash(password,saltRound);

       const UserCreated = await User.create({name,email,password})
       res.status(500).json({msg:UserCreated})
    }
    catch(error){
        res.status(500).json("internal server error")
    }
};


const login= async(req,res)=>{
    try{
        const {email,password}=req.body;

        const userExist=await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

    }
    catch(error){
        res.status(400).send({msg:"Page not found"})
    }
};

const authcontrollers={ home, register,login } 
export default authcontrollers ;