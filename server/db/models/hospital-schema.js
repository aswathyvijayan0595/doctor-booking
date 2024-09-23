const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  city: {
    type: String,
    trim: true,
  },
  pincode: Number,
  street: String,
});
const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: addressSchema,
    departments: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
      },
      image:{
        type:String,
        required:true,
        trim:true
    },
    
  },
  {
    timestamps: true,
  }
);

const Hospitals = mongoose.model('Hospitals', hospitalSchema);
module.exports = Hospitals;
