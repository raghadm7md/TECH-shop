const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total: Number,
  date: Date,
  products_ID:String
});

const userSchema = new mongoose.Schema({
  name:{type : String , required:true },
  password:{type:String, require:true },
  email:{type: String , require:true },
  isAdmin:{type:false , default:false },

  // embed order in user
  purchased: [orderSchema],
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = {
  favFood: 'CHICKEN',
  // User,
  User: User,
  // Tweet,
  Tweet: Tweet,
};