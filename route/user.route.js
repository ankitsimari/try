const express = require('express');
const { userModel } = require('../model/user.model');
const userRouter = express.Router();


userRouter.post("/signup",async(req,res)=>{
    const {email,name,password} = req.body
    try{
        const already = await userModel.findOne({email});
        if(!already){
            const user = new userModel({name,email,password})
            await user.save();
            res.status(200).send({"userAdded":user})
        }else{
            res.status(200).send("userAlreadyRegistered")
        }
    }
    catch(e){
        res.status(400).send({"error":e.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{    
        let user = await userModel.findOne({email});
        if(user && user.password==password){
            res.status(200).send({"loginSuccessful":user})
        }else{
            res.status(200).send("wrong email or password")
        }
    }
    catch(e){
        res.status(400).send({"error":e.message})
    }
})


userRouter.get("/",async(req,res)=>{
    try{
        let users = await userModel.find();
        res.status(200).send(users)
    }  catch(e){
        res.status(400).send({"error":e.message})
    }

})


module.exports={userRouter}