const express = require('express');
const router = express.Router();
const controllers = require('../controllers/department-controller');
const upload = require('../middlewares/upload');
const checkToken = require('../middlewares/checkToken');

router.get('/', checkToken(['DOCTOR', 'USER']), controllers.getDepartments);
// router.get('/', checkToken('DOCTOR'), controllers.getDepartments);
router.post(
  '/',
  checkToken('DOCTOR'),
  upload.single('image'),
  controllers.postDepartment
);

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'Working' });
// });

module.exports = router;
