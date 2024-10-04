import mongoose from "mongoose"
const userschema = mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    npasswordame:{type:String,require:true},
});

export default mongoose.model("users", userschema);