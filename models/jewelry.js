const mongoose = require("mongoose") 
const jewelrySchema = mongoose.Schema({ 
 brand: String, 
 material: String, 
 cost: String 

}) 
 
module.exports = mongoose.model("jewelry", 
jewelrySchema) 