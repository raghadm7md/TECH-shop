const mongoose = require('mongoose');

// Define Article Schema
const ProductSchema = new mongoose.Schema({
  name :{String, required: true }, 
  price: { type: Number, required: true },
  type: { type: String ,required: true },
  description: { type: String },
  quantitiy:{type:Number}
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Product = mongoose.model('Products', ProductSchema);

// Export our Model for use
module.exports = Product;

