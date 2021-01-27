// Require necessary NPM packages
const express = require('express');
// const mongoose = require('mongoose');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */

router.get('/articles/test', (req, res) => {
  console.log('articles')
  res.json({
    message: 'Welcome to Articles',
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;