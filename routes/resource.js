
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jewelry_controller = require('../controllers/jewelry'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// jewelry ROUTES /// 
 
// POST request for creating a jewelry.  
router.post('/resource/jewelrys', jewelry_controller.jewelry_create_post); 
 
// DELETE request to delete jewelry. 
router.delete('/resource/jewelrys/:id', jewelry_controller.jewelry_delete); 
 
// PUT request to update jewelry. 
router.put('/resource/jewelrys/:id', 
jewelry_controller.jewelry_update_put); 
 
// GET request for one jewelry. 
router.get('/resource/jewelrys/:id', jewelry_controller.jewelry_detail); 
 
// GET request for list of all jewelry items. 
router.get('/resource/jewelrys', jewelry_controller.jewelry_list); 
 
module.exports = router;