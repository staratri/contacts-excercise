var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactsSchema = new Schema({
  firstName: {type : String, required : true},
  lastName: {type : String, required : true},
  contactNumber : {type : String, required : true},
  gender : {type : String, required : true},
  date: { type: Date, default: Date.now }
});

const Contacts = mongoose.model("contacts", contactsSchema);
module.exports = Contacts;