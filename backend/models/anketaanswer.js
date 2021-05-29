const mongoose = require('mongoose');

const anketaanswer = mongoose.Schema({
  IdA: { type: Number, require: true},
  User: { type: String, require: true},
  Answers: { type: Array, require: true}
});


module.exports = mongoose.model('anketaanswer', anketaanswer);
