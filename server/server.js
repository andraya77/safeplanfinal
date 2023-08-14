// FULLY INTEGRATED BZC TUTORIAL CODE:
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/server/views/';

const app = express();
// WOULD THE ABOVE BE...
// const server = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));
// do I need this app.use below?
app.use(bodyParser.json());

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./app/models");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models"); // <--all models

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SafePlan Application." });
});

// do I need this app.get below?
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./routes"); // <-- all routes

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});