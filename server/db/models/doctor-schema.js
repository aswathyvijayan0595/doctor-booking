const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
