const express= require("express");
const app = express();
const mongoose= require("mongoose");
app.use(express.json());


var MongoClient = require('mongodb').MongoClient;

var mongoUrl = "";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e));

app.listen(5000,()=>{
    console.log("Server started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
})

require("./userDetails");

const User=mongoose.model("UserInfo");

app.post("/SignUp",async(req,res)=>{
    const {name,email,mobileNo,password,apartment,city,state,zip}=req.body;
    try{
        await User.create({
            uname:name,
            email,
            phno:mobileNo,
            password,
            apartment,
            city,
            state,
            zip,
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
    }
});
