const mongoose = require('mongoose');

const testanswer = mongoose.Schema({
  IdT: { type: Number, require: true},
  User: { type: String, require: true},
  Answers: { type: Array, require: true}
});


module.exports = mongoose.model('testanswer', testanswer);
