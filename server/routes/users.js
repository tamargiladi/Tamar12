var express = require('express')

const email = 'englishStaff@ramot.com'
const password = '123456'

const User = require('../models/users')
var router = express.Router()

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', (req, res, next) => {
  const user = new User({
    //TODO: Add encrypting
    email: req.body.email,
    password: req.body.password,
  })
  user.save().then((result) => {
    res.status(201).json({
      messgae: 'ok',
    })
  })
  //New user and store it in the database
})

module.exports = router
