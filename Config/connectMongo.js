const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017"
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log(`Error ${err}`)
    })

const Schema = mongoose.Schema
module.exports = Schema