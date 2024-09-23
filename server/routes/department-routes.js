const express = require('express');
const router = express.Router();
const controllers = require('../controllers/department-controller');
const upload = require('../middlewares/upload');
const checkToken= require('../middlewares/checkToken')
router.get('/', checkToken('DOCTOR','USER'),controllers.getDepartments);
router.post('/',checkToken('DOCTOR'), upload.single('image'), controllers.postDepartments);
router.get('/pdf',(req,res)=>{
    res.render('pdf.ejs')
})
module.exports = router;
