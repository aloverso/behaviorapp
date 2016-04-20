var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name: String,
  responses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Response'}]
});

module.exports = mongoose.model('Student', studentSchema);
