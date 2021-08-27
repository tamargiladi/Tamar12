var express = require('express')
const bodyParser = require('body-parser')

const Group = require('../models/groups')
var router = express.Router()

router.post('', (req, res, next) => {
  console.log('---->post(api/groups')
  const group = new Group({
    id: req.body.id,
    title: req.body.title,
    groupId: req.body.groupId,
    students: req.body.students,
  })
  group.save().then((result) => {
    res.status(201).json({
      message: 'Group added succefully',
    })
  })
})

router.get('', (req, res, next) => {
  Group.find().then((documents) => {
    res.status(200).json({
      message: 'Groups fetched succesfully',
      groups: documents,
    })
  })
})

router.get('/:id', (req, res, next) => {
  Group.findById(req.params.id).then((group) => {
    if (group) {
      res.status(200).json(group)
    } else {
      res.status(404).json({ message: 'Group not found!' })
    }
  })
})

module.exports = router
