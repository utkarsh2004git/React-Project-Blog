


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
        console.log(req.body);
        res.status(200).json({message: req.body});
    }
    catch(error){
        res.status(500).json("internal server error")
    }
};
const login= async(req,res)=>{
    try{
        res.status(200)
        .send(
            "Welcome to my login server"
        );
    }
    catch(error){
        res.status(400).send({msg:"Page not found"})
    }
};

const authcontrollers={ home, register,login } 
export default authcontrollers ;