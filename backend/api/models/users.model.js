const mongoose = require('mongoose')

 const userSchema = new mongoose.Schema({
   name: {
     type: String,
     required: [true, 'Name is required']
   },

   email: {
     type: String,
     required: [true, 'Email is required'],
     validate: {
       validator(value) {
         return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-	zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
       }
     },
     unique: [true, 'This is email is registered']
   },

   password: {
     type: String,
     required: true
   },

   date_of_birth: {
     type: Date,
     required: true
   },

   gender: {
     type: String,
     required: true
   },

   favourite_centers: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'center'
   }],

   createdAt: {
     type: Date,
     default: Date.now() // Get a timestamp :)
   }
 })

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
