require('dotenv').config()

const express = require('express');
const entryRoutes = require('./routes/entryRoutes');

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log('~~~ Request Type: ' + req.method + ', Path: ' + req.path);
  next();
});

// routes
app.use('/api/entries', entryRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('~~~ Server listening on port: ' + process.env.PORT);
});