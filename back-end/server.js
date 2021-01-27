const express = require('express');
const app = express();
const mongoose = require('mongoose');


console.log(favFood);

const {  Product } = require('./models/product.js');
app.use(express.json());


/* ============================================== */
// to can see the body from req instead of undefined
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mongooseAssociationsInClass', {
mongoose.connect('mongodb://localhost:27017/products', {

  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('DB IS CONNECTED :)');
});
/* ============================================== */

app.get('/', (req, res) => {
  console.log('GET /');
  res.json('SERVER IS WORKING :P');
});


//MESHAL: write the code for app.get (to get all the products) 


//get all prouct 
app.get('/product', (req, res) => {
    console.log('GET /product');
    Product.find({}, function (err, data) {
      res.json(data);
    });
  });

//another app.get (to get ONE product only by ID)

app.get('/getById', (req, res) => {
    console.log(req.query.id);
    console.log('GET /getById');
    Product.findById(req.query.id, function (err, result) {
      if (err) {
        res.send(err);


/* ============================================== */

app.post('/api/product', (req, res) => {
  console.log('POST /product');
  console.log('BODY: ', req.body);

Product.create(req.body, (err, newProduct) => {
    if (err) {
      console.log('ERR: ', err);
    } else {
       console.log(newProduct)
      res.json(newProduct);
    }
  });
});


/* ============================================== */



app.delete('/deletePro/', (req, res) => {

  console.log('product ID: ', req.body.productId);

  Product.findById(req.body.productId , (err, foundproduct) => {
    console.log('FOUND USER: ', foundproduct);
    foundproduct._id(req.body.productId).remove();
    foundproduct.save((err, result) => {
      if (err) {
        console.log('ERR: ', err);

      } else {
        res.json(result);
      }
    });
  });

});


/* ============================================== */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});

