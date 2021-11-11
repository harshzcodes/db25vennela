var express = require('express');
const jewelry_controlers= require('../controllers/jewelry'); 
var router = express.Router();

/* GET home page. */
router.get('/', jewelry_controlers.jewelry_view_all_Page ); 

module.exports = router;