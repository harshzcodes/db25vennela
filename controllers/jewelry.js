var jewelry = require('../models/jewelry'); 
 
// List of all jewelrys 
exports.jewelry_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewelry list'); 
}; 
 
// for a specific jewelry. 
exports.jewelry_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewelry detail: ' + req.params.id); 
}; 
 
//Handle jewelry create on POST. 
exports.jewelry_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jewelry(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jewelry_type":"goat", "cost":12, "size":"large"} 
    document.brand = req.body.brand; 
    document.material = req.body.material; 
    document.cost = req.body.cost; 


    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle jewelry delete form on DELETE. 
exports.jewelry_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewelry delete DELETE ' + req.params.id); 
}; 
 
// Handle jewelry update form on PUT. 
exports.jewelry_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewelry update PUT' + req.params.id); 
}; 
// List of all jewelrys 
exports.jewelry_list = async function(req, res) { 
    try{ 
        thejewelrys = await jewelry.find(); 
        res.send(thejewelrys); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.jewelry_view_all_Page = async function(req, res) { 
    try{ 
        thejewelrys = await jewelry.find(); 
        res.render('jewelrys', { title: 'jewelry Search Results', results: thejewelrys }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};