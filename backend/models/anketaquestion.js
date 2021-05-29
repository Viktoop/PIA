const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const anketaquestion = mongoose.Schema({
  IdQ: { type: Number, require: true},
  Question: { type: String, require: true},
  Type: { type: Number, require: true},
  Answers: { type: Array},
  NumberAnswers: { type: Number, require: true}
});


module.exports = mongoose.model('anketaquestions', anketaquestion);
