const mongoose=require("mongoose")
const Schema = require("../Config/connectMongo")
const userSchema = new Schema({
    user:{
        name:{
            type:String,
        },
        email:{
            type:String,
            required:true,
        }
    }
}
)

const UserModel = mongoose.model("userModel", userSchema)

module.exports = UserModel