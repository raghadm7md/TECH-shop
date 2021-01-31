const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.js");
const cors = require('cors');
// Require Route Files
const bodyParser=require("body-parser");
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');

const db_url = require('./db');

/* ============================================== */
// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});

// Instantiate Express Application Object
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
/* ============================================== */

// app.get("/", (req, res) => {
//   console.log("GET /");
//   res.json("WORKING FROM SEVER.JS");
// });

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

const reactPort = 3000;
// Set CORS headers on response from this API using the `cors` NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/*** Routes ***/

// Mount imported Routers
app.use(productRouter);
app.use(userRouter);


// app.use(function(req,res,next){
//   res.header("Access-Cotrol-Allow-Origin","*");
//   res.header("Access-Cotrol-Allow-Header","Origin ,X-Requested-With" ,
//   "Content-Type", "Accept");
//   res.header("Access-Cotrol-Allow-Methods",'PUT ,GET ,DELETE ,OPTIONS');
//   next();
//   });

/* ============================================== */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});


