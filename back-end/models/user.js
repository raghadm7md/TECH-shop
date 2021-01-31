const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total: {type: Number},
  // date: {type: String},
  products_ID: {type: String},
},{
  timestamps: true,
});


const userSchema = new mongoose.Schema({
  name:{type : String , required:true , trim: true},
  password:{type:String, required:true },
  email:{type: String , required:true , unique:true} ,
  isAdmin:{type:Boolean , default:false },
  Address:{
    country: String,
    city: String,
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



