const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  isDeleted: {
    type: Boolean,
    default: false
  },
  // embed order in user
  purchased: [orderSchema],
  
}
, {
  timestamps: true,
});


userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  if (password == this.password){
    return true
  }
  // return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);



module.exports = {
  // User,
  User: User,
  // Order,
  Order: Order,
};



