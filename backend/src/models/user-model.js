import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    },
});


//secure password
userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified('password')){
        next();
    }
    try{
        const saltRound= await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }   
    catch(error){
        next(error);
    }
})


//define the model or collection

const User = new mongoose.model('User',userSchema);

export default User;