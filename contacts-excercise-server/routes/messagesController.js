var express = require('express');
var router = express.Router();
// var nexmo = require('../configs/nexmo')
var SentSms = require('../models/sentSmsModel')

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: '2d19cd53',
  apiSecret: 'VASvcTHVXk5PHqBi'
})

router.post('/sendSms', async (req, res) =>{
    console.log(req.body)
    let otp = Math.random() * 1000000
    let from = "Contacts-Exc"
    let to = '0' + req.body.contact
    let text = req.body.message + ' ' + Math.round(otp)
    let status = await nexmo.message.sendSms(from, to, text, (res=>{
        console.log(res)
    }))
    console.log(typeof to)
})

module.exports = router