const mongoose = require("mongoose") 
const jewelrySchema = mongoose.Schema({ 
 brand: String, 
 material: {
    type: String,
    minLength: 2
}, 
 cost: String 
}) 
 
module.exports = mongoose.model("jewelry", 
jewelrySchema) 