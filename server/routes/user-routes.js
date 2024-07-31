const express = require('express');
const router = express.Router();
const controllers = require('../controllers/user-controller');

router.post('/signup', controllers.signupUser);
module.exports = router;
