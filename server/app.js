const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const examsRoutes = require('./routes/exams')
const studentsRoutes = require('./routes/students')
const groupsRoutes = require('./routes/groups')

const app = express()

mongoose
  .connect(
    'mongodb+srv://javascript-tmr:javascript-tmr123@cluster0.t1zin.mongodb.net/angular-EnglishApp?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  )
  next()
})

app.use('/api/exams', examsRoutes)
app.use('/api/students', studentsRoutes)
app.use('/api/groups', groupsRoutes)
module.exports = app
