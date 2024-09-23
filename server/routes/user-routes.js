const express = require('express');
const controllers = require('../controllers/user-controller');
const checkToken = require('../middlewares/checkToken');
// const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/signup', controllers.signupUsers);
router.post('/login', controllers.loginUsers);
router.get(
  '/getprofile/:userId',
  checkToken('USERS'),
  controllers.getUserProfile
);

module.exports = router;
