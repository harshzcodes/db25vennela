var jewelry = require('../models/jewelry'); 
 
// List of all jewelrys 
exports.jewelry_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewelry list'); 
}; 
 
// for a specific jewelry. 

// for a specific Costume. 
exports.jewelry_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jewelry.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
//Handle Costume update form on PUT. 
exports.jewelry_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jewelry.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.brand)  
               toUpdate.brand = req.body.brand; 
        if(req.body.material) toUpdate.material = req.body.material; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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