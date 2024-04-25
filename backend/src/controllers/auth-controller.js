


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
        res.status(200)
        .send(
            "Welcome to my register server"
        );
    }
    catch(error){
        res.status(400).send({msg:"Page not found"})
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


export { home, register,login };