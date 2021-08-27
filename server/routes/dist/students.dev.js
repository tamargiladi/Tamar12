'use strict'

var express = require('express')

var bodyParser = require('body-parser')

var Student = require('../models/students')

var router = express.Router() // /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('', (req, res, next) => {
  console.log('--->post(api/students')
  console.log(req.body.groupId)
  const student = new Student({
    //TODO: Add encrypting
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    groupId: req.body.groupId,
  })
  student.save().then((result) => {
    res.status(201).json({
      messgae: 'Student added successfully',
    })
  })
})
router.get('', (req, res, next) => {
  Student.find().then((documents) => {
    res.status(200).json({
      message: 'Students fetched successfully',
      students: documents,
    })
  })
})
router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id).then(function (student) {
    if (student) {
      res.status(200).json(student)
    } else {
      res.status(404).json({
        message: 'Student not found',
      })
    }
  })
})
module.exports = router
