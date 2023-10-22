let UserModel = require("../Models/userModel.js")
let UserController = {
    find: async(req,res)=>{
        let found = await UserModel.find({name:req.params.username})
        res.json(found);
    },
    all: async(req,res)=>{
        let allUsers = await UserModel.find()
        res.json(allUsers)
    },
    create:async(req,res)=>{
        try{
            const userModel = new UserModel({user:req.body})
            await userModel.save()
            res.status(200).json({
                userModel
            })
        }
        catch(err){
            res.status(500).json({err})
            console.log(err)
        }
    }
}
module.exports = {
    UserController
}