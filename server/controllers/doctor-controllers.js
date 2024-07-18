const Doctor = require('../db/models/doctor-schema');
const bcrypt = require('bcrypt');

module.exports.signupDoctor = async (req, res) => {
  const { body } = req;
  const { originalname } = req.file;

  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(403).json({ message: 'Email already taken' });
  }
  if (body.password != body.confirmPassword) {
    return res.status(403).json({ message: 'passwords are not matching' });
  }

  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;
  body.image = `http://localhost:${process.env.PORT}/uploads/${originalname}`;
  const newDoctor = await Doctor.create(body);

  res.status(201).json({ message: 'Account Created', data: newDoctor });
};

module.exports.loginDoctor = () => {};
