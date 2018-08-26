var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sentSmsSchema = new Schema({
  userId: {type : String, required : true},
  message: {type : String, required : true},
  otp : {type : String, required : true},
  date: { type: Date, default: Date.now }
});

const SentSms = mongoose.model("sentSms", sentSmsSchema);
module.exports = SentSms;