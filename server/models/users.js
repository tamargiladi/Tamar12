const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
