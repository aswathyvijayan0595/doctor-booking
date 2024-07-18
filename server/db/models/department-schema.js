const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      requires: true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
