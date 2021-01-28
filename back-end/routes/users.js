const express = require('express');
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

const {User , Order} =require('../models/user')
/* ============================================== */
// to can see the body from req instead of undefined
router.use(express.json());
mongoose.connect("mongodb://localhost:27017/tech", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("DB IS CONNECTED !!!");
});
/* ============================================== */

router.get("/testUsers", (req, res) => {
  console.log("GET /");
  res.json("SERVER IS WORKING from users.js");
});



/* ============================================== */
//RAGHAD 
// ######### delete user by ID ###########
router.delete('/user', (req, res) => {
  console.log('PARAMS:', req.query.id);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  User.findOneAndDelete({ _id: req.query.id}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json('DELETE SUCCESS!!');
    }
  });
});

// ######### delete user'order by ID ###########
router.delete('/user/order', (req, res) => {
  User.findById(req.query.userId, (err, foundUser) => {
    console.log('FOUND USER: ', foundUser);
    foundUser.purchased.id(req.query.orderId).remove();
    foundUser.save((err, result) => {
      if (err) {
        console.log('ERR: ', err);
      } else {
        res.json(result);
      }
    });
  });
});


module.exports=router; 