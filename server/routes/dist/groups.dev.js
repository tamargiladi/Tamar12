"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var Group = require('../models/groups');

var router = express.Router();
router.post('', function (req, res, next) {
  console.log('---->post(api/groups');
  var group = new Group({
    id: req.body.id,
    title: req.body.title,
    groupId: req.body.groupId,
    students: req.body.students
  });
  group.save().then(function (result) {
    res.status(201).json({
      message: 'Group added succefully'
    });
  });
});
router.get('', function (req, res, next) {
  Group.find().then(function (documents) {
    res.status(200).json({
      message: 'Groups fetched succesfully',
      groups: documents
    });
  });
});
router.get('/:id', function (req, res, next) {
  Group.findById(req.params.id).then(function (group) {
    if (group) {
      res.status(200).json(group);
    } else {
      res.status(404).json({
        message: 'Group not found!'
      });
    }
  });
});
module.exports = router;