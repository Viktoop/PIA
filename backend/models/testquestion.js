const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const testquestion = mongoose.Schema({
  IdQ: { type: Number, require: true},
  Question: { type: String, require: true},
  Type: { type: Number, require: true},
  Answers: { type: Array},
  Key: { type: Array},
  NumberAnswers: { type: Number, require: true},
  NumberKeys: { type: Number, require: true}
});


module.exports = mongoose.model('testquestions', testquestion);
