const express = require('express');
const router = express.Router();
const controllers = require('../controllers/doctor-controllers');
const upload = require('../middlewares/upload');

router.post('/signup', upload.single('image'), controllers.signupDoctor);

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'Working' });
// });

module.exports = router;
