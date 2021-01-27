const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');

/* ============================================== */
// to can see the body from req instead of undefined
app.use(express.json());

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
