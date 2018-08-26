var express = require('express');
var router = express.Router();
const Contacts = require('../models/ContactsModel')

router.get('/', (req, res) => {
  let allContacts = Contacts.find((err, response) =>{
    if(err)
      return res.json({
        status : 0, response : null, message : err.message
      })
    res.json({
      status : 1, response : response, message : "All available Contacts"
    })
  })
})



// This route is used to add new contact
router.post('/', function(req, res, next) {
  let newContact = new Contacts(req.body)
  newContact.save(err =>{
    if(err)
      return res.json({
        status : 0, response : null, message : err.message
      })
    res.json({
      status : 1, response : req.body, message : "New Contact Created!"
    })
  })
});

module.exports = router;
