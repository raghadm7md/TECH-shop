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


//to make sure about the email & pass
// router.get("/user/login", (req, res) => {
//   console.log("GET /user/login");
//   User.find({}, function (err, data) {
//     res.json(data);
//   });
// });

//registertion 

router.post('/register',(req,res)=>{
  let name= req.body.name;
  let password=req.body.password;
  let email=req.body.email;

  const newuser= new User();
  newuser.name=name;
  newuser.password=password;
  newuser.email=email;
  newuser.save((err,savedUser)=>{
    if(err){
      console.log(err);
      return res.status(500).send({message: "Error"});
    }
    return res.status(200).send({message:"OK "});
  })
});



//login 
router.post('/login',(req,res)=>{
  let email=req.body.email;
  let password= req.body.password;
  User.findOne({email:email, password:password},(err,User1)=>{
    console.log("ttttttt",User1);
    if(err){
      console.log(err);
      return res.status(500).send({message : "IIIIIIII"});
    }
    if(!User1){
      console.log("OOOOOO");
      return res.status(401).send({message : "ERRRRR"});
    }else {
      console.log("RRRRRRR");
      return res.status(200).send({message : "OK, SUCCESS", success:true});
    }
  })
})




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

//create order for user
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
//Meshal
router.put('/user/:id', (req, res) => {

  User.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});



/* ============================================== */
//RAGHAD 
// ######### delete user by ID ###########
router.delete('/user/:id', (req, res) => {
  console.log('PARAMS:', req.params.id);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  User.findOneAndDelete({ _id: req.params.id}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// ######### delete user'order by ID ###########
// router.delete('/user/order', (req, res) => {
//   User.findById(req.query.userId, (err, foundUser) => {
//     console.log('FOUND USER: ', foundUser);
//     foundUser.purchased.id(req.query.orderId).remove();
//     foundUser.save((err, result) => {
//       if (err) {
//         console.log('ERR: ', err);
//       } else {
//         res.json(result);
//       }
//     });
//   });
// });

module.exports=router; 