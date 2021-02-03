require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const Product = require("./models/product.js");
const cors = require('cors');
// Require Route Files
const bodyParser=require("body-parser");
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const db_url = require('./db');

// here for add image ##################
// const fileUpload = require('express-fileupload');




//Make sure to add to your whitelist any website or APIs that connect to your backend.






/* ============================================== */
// Establish Database Connection
mongoose.connect(process.env.mongoDBURL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});

// Instantiate Express Application Object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
/* ============================================== */

 app.get("/", (req, res) => {
  console.log("GET /");
  res.json("WORKING FROM SEVER.JS aaa");
 });

 app.get("/a", (req, res) => {
  console.log("GET /");
  res.json("WORKING FROM SEVER.JS bbb");
 });

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());
// here for add image ##################
// app.use(fileUpload());


// const reactPort = 3000;
// // Set CORS headers on response from this API using the `cors` NPM package.
// app.use(
//   cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
// );

/*** Routes ***/

// Mount imported Routers
app.use('/api/product/',productRouter);
app.use('/api/user/',userRouter);


// app.use(function(req,res,next){
//   res.header("Access-Cotrol-Allow-Origin","*");
//   res.header("Access-Cotrol-Allow-Header","Origin ,X-Requested-With" ,
//   "Content-Type", "Accept");
//   res.header("Access-Cotrol-Allow-Methods",'PUT ,GET ,DELETE ,OPTIONS');
//   next();
//   });

/* ============================================== */





//must change your port to this for deployment else it wont work
const PORT = process.env.PORT;






var whitelist = [`http://localhost:${PORT}`];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));



//serves all our static files from the build directory.
app.use(express.static(__dirname + "/build"));

// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", (req, res) => {
  res.sendFile(__dirname+"/build/index.html");
});

app.listen(PORT);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("SERVER IS WORKING ON http://localhost:" + PORT);
// });


