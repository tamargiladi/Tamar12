"use strict";

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  groupId: {
    type: String,
    required: true
  },
  students: {
    type: Array
  }
});
module.exports = mongoose.model('Group', userSchema);