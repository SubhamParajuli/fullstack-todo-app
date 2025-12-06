import mongoose from "mongoose";

//1- create Schema
//2-model based off of that Schema

const noteSchema= new mongoose.Schema({
    title:{
         type:String,
         required: true,
    },
    content:{
        type: String,
        required:true,
    },
    
},
{timestamps: true});


const Note=mongoose.model("Note",noteSchema)
export default Note
