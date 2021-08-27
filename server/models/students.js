const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  groupId: { type: String, required: true },
})

module.exports = mongoose.model('Student', userSchema)
