const User = require('../db/models/user-schema');
const bcrypt = require('bcrypt');

module.exports.signupUser = async (req, res) => {
  const { body } = req;
  //const { originalname } = req.file;

  const user = await User.findOne({ email: body.email });
  if (user) {
    return res.status(403).json({ message: 'Email already taken' });
  }
  if (body.password != body.confirmPassword) {
    return res.status(403).json({ message: 'passwords are not matching' });
  }

  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;
  //body.image = `http://localhost:${process.env.PORT}/uploads/${originalname}`;
  const newUser = await User.create(body);

  res.status(201).json({ message: 'Account Created', data: newUser });
};
