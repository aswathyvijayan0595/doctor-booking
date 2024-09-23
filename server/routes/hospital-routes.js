const express= require('express');
const controllers=require("../controllers/hospital-controller")
const upload=require("../middlewares/upload")

const router= express.Router();

router.get('/',controllers.getHospitals)
// router.get('/:departmentId', controllers.getHospitalsByDepartmentId);
router.post('/',upload.single('image'),controllers.postHospitals)


module.exports= router;