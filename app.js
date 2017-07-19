const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// initialize our node app with Express
const app = express();

// get user routes
const users = require('./routes/users');

// port number
const port = 3000;

// CORS middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser middleware
app.use(bodyParser.json());

app.use('/users', users);

// index route
app.get('/', (req, res) => {
  res.send('invalid Endpoint');
});

// start server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
