// freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.send('API is working properly');
// });

// module.exports = router;
// freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

//BZC TUTORIAL CODE
// module.exports = app => {
//     const tutorials = require("../controllers/tutorial.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new Tutorial
//     router.post("/", tutorials.create);
  
//     // Retrieve all Tutorials
//     router.get("/", tutorials.findAll);
  
//     // Retrieve all published Tutorials
//     router.get("/published", tutorials.findAllPublished);
  
//     // Retrieve a single Tutorial with id
//     router.get("/:id", tutorials.findOne);
  
//     // Update a Tutorial with id
//     router.put("/:id", tutorials.update);
  
//     // Delete a Tutorial with id
//     router.delete("/:id", tutorials.delete);
  
//     // Delete all Tutorials
//     router.delete("/", tutorials.deleteAll);
  
//     app.use('/api/tutorials', router);
//   };