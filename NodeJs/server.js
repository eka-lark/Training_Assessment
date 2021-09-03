const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const path = require("path");
const bodyParser = require("body-parser");
const products = require("./routes/node.routes");

/* Create express route */
const app = express();

//Bodyparser
app.use(express.json());

//cors
app.use(cors());

//database config
const db = config.get("db.url");

/* Connecting to the database */
mongoose.Promise = global.Promise;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to the database`);
  })
  .catch((err) => {
    console.log(`Could not connect to the database...`, err);
    process.exit();
  });

  app.get('/', (req, res) => {
    res.send("Welcome to CRUD Api for Product using NodeJs / Express...");
});

//use routes
app.use('/api/products', products);

const PORT = 3000;
// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
