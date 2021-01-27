const mongoose = require('mongoose');

// Define Article Schema
const ProductSchema = new mongoose.Schema({
  name :{String }, 
  price: { type: Number },
  type: { type: String },
  description: { type: String },
  quantitiy:{type:Number}
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Product = mongoose.model('Product', ProductSchema);

// Export our Model for use
module.exports = Product;



// required: true
// required: true
// required: true