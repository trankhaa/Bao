const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// user schema
const userSchema = new mongoose.Schema(
   {
      id: {
         type: Number,
         unique: true,
      },
      firstName: {
         type: String,
         required: true,
      },
      lastName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      phone: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

userSchema.plugin(AutoIncrement, { inc_field: 'id' });

const User = mongoose.model('User', userSchema);

module.exports = User;
