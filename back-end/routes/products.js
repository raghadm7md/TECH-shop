const express = require('express');
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
const Product = require('../models/product')
/* ============================================== */
// to can see the body from req instead of undefined
router.use(express.json());

/* ============================================== */

router.get("/testProducts", (req, res) => {
  console.log("GET from route prod");
  res.json("SERVER IS WORKING from products/js");
});

//MESHAL: write the code for app.get (to get all the products)
//get all prouct
router.get("/product", (req, res) => {
  console.log("GET /product");
  Product.find({}, function (err, data) {
    res.json(data);
    
  });
});

//MHMD: UNUSED ROUTE / MAY USE LATER / WORKING FINE 
router.get("/covers", (req, res) => {
  console.log("GET /cover");
  Product.find({type: "cover"}, function (err, data) {
    res.json(data);
  });
});

router.get("/powerbanks", (req, res) => {
  console.log("GET /powerbanks");
  Product.find({type: "PowerBank"}, function (err, data) {
    res.json(data);
  });
});

router.get("/cables", (req, res) => {
  console.log("GET /cables");
  Product.find({type: "cable"}, function (err, data) {
    res.json(data);
  });
});


//MESHAL: another app.get (to get ONE product only by ID)
router.get("/ProductById", (req, res) => {
  console.log(req.query.id);
  console.log("GET /getById");
  Product.findById(req.query.id, function (err, result) {
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
router.post("/product", (req, res) => {
  console.log("POST /product");
  console.log("BODY: ", req.body);

  Product.create(req.body, (err, newProduct) => {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(newProduct);
      res.json(newProduct);
    }
  });
});


/* ============================================== */
//MHMD

router.put('/product/:id', (req, res) => {

  Product.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


/* ============================================== */
//RAGHAD
router.delete('/product/:id', (req, res) => {
  console.log('PARAMS:', req.params);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  Product.findOneAndDelete({ _id: req.params.id}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
/* ============================================== */

module.exports=router; 
