const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  groupId: { type: String, required: true },
  students: { type: Array },
})

module.exports = mongoose.model('Group', userSchema)
