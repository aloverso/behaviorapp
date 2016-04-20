var mongoose = require('mongoose');

var responseSchema = mongoose.Schema({
  name: String,
  date: Date,
  question: String,
  response: String
});

module.exports = mongoose.model('response', responseSchema);
