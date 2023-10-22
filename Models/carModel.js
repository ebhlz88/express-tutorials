const mongoose=require("mongoose")
const Schema = require("../Config/connectMongo")
const carSchema = new Schema({
    companyName:{
        type:String,
        required:true
    },
    items:{
        type:Number,
        required:true,
        default:1,
        
    },
    price:{
        type:Number,
        min:20,
        required:false,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'userModel'
    }
})
const CarModel = mongoose.model("carModel",carSchema)
module.exports = CarModel