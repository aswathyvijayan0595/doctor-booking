const Hospitals = require('../db/models/hospital-schema');

const getHospitals = async (req, res) => {
  try {
    const { departmentId } = req.query;
    let hospitals;

    if (departmentId) {
      hospitals = await Hospitals.find({ departments: departmentId });
    } else {
      hospitals = await Hospitals.find();
    }

    res.status(200).json({ message: 'success', data: hospitals });
  } catch (e) {
    res.status(400).json(e);
  }
};
const postHospitals = async (req, res) => {
  try {
    const body = req.body;
    const { originalname } = req.file;
    console.log(req.file);
    body.image = `http://localhost:${process.env.PORT}/uploads/${originalname}`;

    const hospitals = await Hospitals.create(body);
console.log(hospitals)
    res.status(201).json({ message: 'success', data: hospitals });
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = { getHospitals, postHospitals };
