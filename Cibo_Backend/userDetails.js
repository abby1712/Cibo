const mongoose= require("mongoose");

const UserDetailsSchema= new mongoose.Schema(
    {
        uname:String,
        email:String,
        phno:String,
        password:String,
        appartment:String,
        city:String,
        state:String,
        zip:String,
    },{
        collection:"UserInfo",
    }
)

mongoose.model("UserInfo",UserDetailsSchema)