const express = require("express");
const AnketaAnswer = require('../models/anketaanswer');

const router = express.Router();


router.post('/insertanketaanswer', (req,res) => {
  const anketaanswer = new AnketaAnswer(req.body.anketa);
  anketaanswer.save().then( r => {
    res.json(r)
  })
})

router.post('/getanketaanswerforuser', (req,res) => {
  let IdA = req.body.IdA
  let username = req.body.Username
  AnketaAnswer.findOne({IdA:IdA, User:username}).then( anketafound => {
    if(!anketafound){
      res.json(null);
    } else {
      res.json(anketafound);
    }
  })
})

router.post('/deleteallid', (req,res) => {
  let idA = req.body.IdA
  AnketaAnswer.deleteMany({IdA: idA}).then( r => {
    res.json(r)
  })
})

module.exports = router;
