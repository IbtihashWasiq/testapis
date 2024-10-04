import users from "../models/usermodel.js"

export const create = async(req,res)=>{
    try{
        const userdata = new users(req.body);
        const{email}=userdata;
        const existemail=await users.findOne({email});
        if(existemail){
            return res.status(404).json({message: "User Not Found"});
        }
        const saveduser=await userdata.save();
        res.status(200).json(saveduser)
    }   
    catch(error){
        res.status(500).json({error:"Internal Server Error"});
    } 
}