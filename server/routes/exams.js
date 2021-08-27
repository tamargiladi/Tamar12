var express = require('express')
const bodyParser = require('body-parser')

const Exam = require('../models/exams')
var router = express.Router()

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('', (req, res, next) => {
  console.log('--->post(api/exams')
  const exam = new Exam({
    //TODO: Add encrypting
    id: req.body.id,
    title: req.body.title,
    teacher: req.body.teacher,
    students: req.body.students,
  })
  exam.save().then((result) => {
    res.status(201).json({
      messgae: 'Exam added successfully',
    })
  })
  //New user and store it in the database
})
router.get('', (req, res, next) => {
  Exam.find().then((documents) => {
    res.status(200).json({
      message: 'Exams fetched successfully!',
      exams: documents,
    })
  })
})

router.get('/:id', (req, res, next) => {
  Exam.findById(req.params.id).then((exam) => {
    if (exam) {
      res.status(200).json(exam)
    } else {
      res.status(404).json({ message: 'Exam not found!' })
    }
  })
})
module.exports = router
