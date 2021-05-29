const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: { type: String, require: true},
  lastName: { type: String, require: true},
  username: { type: String, require: true,  unique: true},
  password: { type: String, require: true},
  birthdate: {type: Date, require: true},
  birthplace: { type: String, require: true},
  jmbg: { type: String, require: true,  unique: true},
  phoneNumber: { type: String, require: true},
  email: { type: String, require: true},
  type: { type: String},
  approved: { type: Boolean}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
