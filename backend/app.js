const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const studentsRoute = require('./routes/students');

app.use('/students', studentsRoute);

module.exports = app