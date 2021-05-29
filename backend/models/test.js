const mongoose = require('mongoose');

const Test = mongoose.Schema({
  IdT: { type: Number, require: true },
  Name: { type: String, require: true },
  Time: { type: Number, require: true },
  StartDate: { type: Date, require: true },
  EndDate: { type: Date, require: true },
  Description: { type: String, require: true },
  Author: {type: String, require:true },
  Questions: { type: Array, require:true }
});


module.exports = mongoose.model('Test', Test);
