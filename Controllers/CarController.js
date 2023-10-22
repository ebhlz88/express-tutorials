let CarModel = require("../Models/carModel.js")
let UserModel = require("../Models/userModel.js")
let CarController = {
    find: async(req,res)=>{
        let found = await CarModel.find({name:req.params.username})
        res.json(found);
    },
    all: async(req,res)=>{
        let allUsers = await CarModel.find()
        res.json(allUsers)
    },
    create:async(req,res)=>{
        try{
            const carModel = new CarModel(req.body)
            const userId = req.params.userId
            let userdata;
            try{
                const user = await UserModel.findOne({ _id: userId }).exec();

                userdata = user
                    console.log(user)
                }catch(err) {
                if (err) {
                  // Handle any errors that occurred during the query
                  return res.status(500).json({ error: "Internal Server Error" });
                }
                }
                
             
            carModel.owner = userdata._id;
            await carModel.save()
            res.status(200).json(carModel)
        }
        catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}
module.exports = {
    CarController
}