const mongoose = require('mongoose');

// Define product Schema
const ProductSchema = new mongoose.Schema({
  name :{type: String, required: true}, 
  price: { type: Number , required: true},
  type: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  quantitiy:{type:Number},
  count:{type:Number , default: 1 }
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Product = mongoose.model('Product', ProductSchema);

// Export our Model for use
module.exports = Product;

