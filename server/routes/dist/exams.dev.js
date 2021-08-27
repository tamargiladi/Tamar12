"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var Exam = require('../models/exams');

var router = express.Router(); // /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('', function (req, res, next) {
  console.log('--->post(api/exams');
  var exam = new Exam({
    //TODO: Add encrypting
    id: req.body.id,
    title: req.body.title,
    teacher: req.body.teacher,
    students: req.body.students
  });
  exam.save().then(function (result) {
    res.status(201).json({
      messgae: 'Exam added successfully'
    });
  }); //New user and store it in the database
});
router.get('', function (req, res, next) {
  Exam.find().then(function (documents) {
    res.status(200).json({
      message: 'Exams fetched successfully!',
      exams: documents
    });
  });
});
router.get('/:id', function (req, res, next) {
  Exam.findById(req.params.id).then(function (exam) {
    if (exam) {
      res.status(200).json(exam);
    } else {
      res.status(404).json({
        message: 'Post not found!'
      });
    }
  });
});
module.exports = router;