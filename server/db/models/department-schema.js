const mongoose=require('mongoose');

const departmentSchema=mongoose.Schema({
name: {
    type:String,
    required:true,
    trim:true
},
image:{
    type:String,
    required:true,
    trim:true
},
},
{
    timestamps:true
})

const Department=mongoose.model('Department',departmentSchema);
module.exports=Department;