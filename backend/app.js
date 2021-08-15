const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const studentsRoute = require('./routes/students');
const teachersRoute = require('./routes/teachers');
// const modulesRoute = require('./routes/modules')

app.use('/students', studentsRoute);
app.use('/teachers', teachersRoute);

module.exports = app