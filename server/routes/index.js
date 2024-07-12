const express = require('express');

const departmentRoutes = require('./department-routes');

const router = express.Router();

router.use('/department', departmentRoutes);
module.exports = router;
