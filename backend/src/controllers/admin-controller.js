import Post from "../models/post-model.js";
import User from "../models/user-model.js";


//get all users

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};


//delete User

export const deleteUserById=async (req,res)=>{
    try {
        
        const id =req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User deleted Successfully!"})

    } catch (error) {
        next(error)
    }
}

//get user by id

export const getUserById=async (req,res)=>{
    try {
        
        const id =req.params.id;
       const fetchedUserData =  await User.findOne({_id:id},{password:0});
        return res.status(200).json(fetchedUserData)

    } catch (error) {
        next(error)
    }
}


//update User

export const updateUserById=async (req,res)=>{
    try {
        
        const id =req.params.id;
        const updatedUserData=req.body;
        const  updatedData=await User.updateOne({_id:id},{
            $set:updatedUserData,
        })
        return res.status(200).json(updatedData)

    } catch (error) {
        next(error)
    }
}



//add Post

export const addPost=async(req,res)=>{
    try {
        console.log(req.body)
        const {userId,author,title,detail}=req.body;


        const PostCreated=await Post.create({userId,author,title,detail});
        res.status(201)
        .json({msg:"Posted Successful",
         token: await PostCreated.generateToken(),
         postId:PostCreated._id.toString()})
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

