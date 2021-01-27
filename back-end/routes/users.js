// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');


// Require Mongoose Model for Article
const Article = require('../models/article');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/*
  C.R.U.D - Actions Table
  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/

/**
 * Action:        SHOW
 * Method:        GET
 * URI:           articles/:id
 * Description:   Get An Article by Article ID
 */

// another way (using Callback, and without extra thing)
router.get('/articles/:id', (req, res) => {
  console.log('PARAMS:', req.params);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  Article.findById( req.params.id , (err, foundArticle) => {
    if (err) {
      res.json(err);
    } else {
      res.json(foundArticle);
    }
  });
});




/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /articles
 * Description:   Get All Articles
 */
router.get('/articles', (req, res) => {
  Article.find({})
    // Return all Articles as an Array
    .then((allArticles) => {
      res.status(200).json({ articles: allArticles });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});
// Article.find({}, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// })

/**
 * Action:       CREATE
 * Method:       POST
 * URI:          /articles
 * Description:  Create a new Article
 */

router.post('/articles', (req, res) => {
  Article.create(req.body)
    // On a successful `create` action, respond with 201
    // HTTP status and the content of the new article.
    .then((newArticle) => {
      res.status(201).json({ article: newArticle });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:      UPDATE
 * Method:      PATCH
 * URI:         /articles/:id
 * Description: Update An Article by Article ID
 */

router.patch('/articles/:id', (req, res) => {
  console.log('PARAMS:', req.params);

  Article.findById(req.params.id)
    .then((foundArticle) => {
      if (foundArticle) {
        // Pass the result of Mongoose's `.update` method to the next `.then`
        return foundArticle.update(req.body);
      } else {
        // If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: 'Document_Not_Found_Error',
            message: "The provided ID doesn't match any documents",
          },
        });
      }
    })
    .then(() => {
      // If the update succeeded, return 204 and no JSON
      res.status(204).end();
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

// another way (using Callback, and without extra thing)
router.put('/articles/:id', (req, res) => {
  console.log('PARAMS:', req.params);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  Article.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json('DONE');
    }
  });
});


/**
* Action:       DESTROY
* Method:       DELETE
* URI:          /articles/:id
* Description:  Delete An Article by Article ID
*/
// another way (using Callback, and without extra thing)
router.delete('/articles/:id', (req, res) => {
  console.log('PARAMS:', req.params);
  // mongoose.Types.ObjectId ('4ed3ede8844f0f351100000c')
  Article.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json('DELETE SUCCESS');
    }
  });
});


// Export the Router so we can use it in the server.js file
module.exports = router;

/* 
router.????('/????', (req, res) => {
  ?????????????????????
  // On a successful `create` action, respond with 201
  // HTTP status and the content of the new article.
  .then(() => {
    res.status().json({ article:  });
  })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});
*/