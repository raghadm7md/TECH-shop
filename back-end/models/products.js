const mongoose = require('mongoose');

// Define Article Schema
const ProductseSchema = new mongoose.Schema({
  name :{String, required: true }, 
  price: { type: Number, required: true },
  type: { type: String ,required: true },
  description: { type: String },
  quantitiy:{type:Number}
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Products = mongoose.model('Products', ProductseSchema);

// Export our Model for use
module.exports = Products;

