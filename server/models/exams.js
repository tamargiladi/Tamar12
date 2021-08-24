const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  teacher: { type: String, required: true },
})

module.exports = mongoose.model('Exam', userSchema)
