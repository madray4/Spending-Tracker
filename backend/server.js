require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const entryRoutes = require('./routes/entryRoutes');

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log('~~~ Request Type: ' + req.method + ', Path: ' + req.path);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.use('/api/entries', entryRoutes);

// connect to database & listen for requests 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('~~~ Connected to database');
    app.listen(process.env.PORT, () => {
      console.log('~~~ Server listening on port: ' + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log('~~~ ' + error.message);
  })
