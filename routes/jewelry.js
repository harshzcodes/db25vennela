var express = require('express');
const jewelry_controlers= require('../controllers/jewelry'); 
var router = express.Router();

/* GET home page. */
router.get('/', jewelry_controlers.jewelry_view_all_Page ); 

/* GET detail jewelry page */ 
router.get('/detail', jewelry_controlers.jewelry_view_one_Page); 

/* GET create jewelry page */ 
router.get('/create', jewelry_controlers.jewelry_create_Page); 
 
/* GET create update page */ 
router.get('/update', jewelry_controlers.jewelry_update_Page); 

module.exports = router;