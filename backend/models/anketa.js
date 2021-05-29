const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Anketa = mongoose.Schema({
  IdA: { type: Number, require: true},
  Name: { type: String, require: true},
  Type: { type: String, require: true},
  StartDate: { type: Date, require: true},
  EndDate: { type: Date, require: true},
  Description: { type: String, require: true},
  Author: {type: String, require:true},
  Questions: { type: Array, require:true}
});


module.exports = mongoose.model('Anketa', Anketa);
