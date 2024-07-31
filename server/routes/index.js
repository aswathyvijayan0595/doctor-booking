const express = require('express');

const departmentRoutes = require('./department-routes');
const hospitalRoutes = require('./hospital-routes');
const doctorRoutes = require('./doctor-routes');
const userRoutes = require('./user-routes');

const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/doctor', doctorRoutes);
router.use('/user', userRoutes);
module.exports = router;
