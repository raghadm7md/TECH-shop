const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total: Number,
  date: Date,
  products_ID:String
});


const userSchema = new mongoose.Schema({
  name:{type : String , required:true , trim: true},
  password:{type:String, require:true },
  email:{type: String , require:true },
  isAdmin:{type:false , default:false },
  Address:{
    city: String,
    street: String,
    houseNumber:Number,
  },
  // embed order in user
  purchased: [orderSchema],
  
}
, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);

module.exports = {
  // User,
  User: User,
  // Order,
  Order: Order,
};