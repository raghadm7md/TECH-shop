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


//MHMD
router.get("/user", (req, res) => {
  console.log("GET /user");
  User.find({}, function (err, data) {
    res.json(data);
  });
});

//another app.get (to get ONE user only by ID)
router.get("/userById", (req, res) => {
  console.log(req.query.id);
  console.log("GET /getById");
  User.findById(req.query.id, function (err, result) {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
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
  // console.log('name: ', req.body.name);
  // console.log('User ID: ', req.body.userId);

  const newOrder = new Order({ 
    total: req.body.total,
    date: req.body.date,
    products_ID: req.body.products_ID,
   });

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
