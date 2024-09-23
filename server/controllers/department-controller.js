const Department = require('../db/models/department-schema');

const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json({ message: 'success', data: departments });
};
const postDepartments = async (req, res) => {
  const { originalname } = req.file;
  const { name } = req.body;

  const departments = await Department.create({
    name: name,
    image: `http://localhost:${process.env.PORT}/uploads/${originalname}`,
  });

  res.status(201).json({ message: 'success', data: departments });
};

module.exports = { getDepartments, postDepartments };
