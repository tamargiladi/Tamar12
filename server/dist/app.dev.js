"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var examsRoutes = require('./routes/exams');

var studentsRoutes = require('./routes/students');

var groupsRoutes = require('./routes/groups');

var app = express();
mongoose.connect('mongodb+srv://javascript-tmr:javascript-tmr123@cluster0.t1zin.mongodb.net/angular-EnglishApp?retryWrites=true&w=majority').then(function () {
  console.log('Connected to database!');
})["catch"](function () {
  console.log('Connection failed!');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});
app.use('/api/exams', examsRoutes);
app.use('/api/students', studentsRoutes);
app.use('/api/groups', groupsRoutes);
module.exports = app;