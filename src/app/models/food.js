import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: {type:String, required:true},
    desp: {type:String, required:true},
    email: {type:String, required:true},
    location: {type:String, required:true},
    image: {type:String, required:true},
    id: {type:String}
})

export default mongoose.model("food", foodSchema)