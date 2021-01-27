const mongoose = require('mongoose');

// Define product Schema
const ProductSchema = new mongoose.Schema({
  name :{type: String, required: true}, 
  price: { type: Number , required: true},
  type: { type: String, required: true },
  description: { type: String },
  quantitiy:{type:Number}
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Product = mongoose.model('Product', ProductSchema);

// Export our Model for use
module.exports = Product;

