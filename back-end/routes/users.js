const express = require('express');
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

const {User , Order } =require('../models/user')
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

router.get("/", (req, res) => {
  console.log("GET /");
  res.json("SERVER IS WORKING :P");
});

/* ============================================== */
//NAJD
router.post("/user", (req, res) => {
  console.log("POST /User");
  console.log("BODY: ", req.body);

  User.create(req.body, (err, newUser) => {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(newUser);
      res.json(newUser);
    }
  });
});

/* create order for user*/
router.post('/user/order', (req, res) => {
  console.log('name: ', req.body.name);
  console.log('User ID: ', req.body.userId);

  const newOrder = new Order({ text: req.body.name });

  User.findById(req.body.userId, (err, foundUser) => {
    console.log('FOUND USER: ', foundUser);
    foundUser.purchased.push(newOrder);

    foundUser.save((err, result) => {
      if (err) {
        console.log('ERR: ', err);
      } else {
        res.json(result);
      }
    });
  });
});


/* ============================================== */

module.exports=router; 
