const express = require("express");
const TestAnswer = require('../models/testanswer');

const router = express.Router();


router.post('/inserttestanswer', (req,res) => {
  const testanswer = new TestAnswer(req.body.test);
  testanswer.save().then( r => {
    res.json(r)
  })
})

router.post('/gettestanswerforuser', (req,res) => {
  let IdT = req.body.IdT
  let username = req.body.Username
  TestAnswer.findOne({IdT:IdT, User:username}).then( testfound => {
    if(!testfound){
      res.json(null);
    } else {
      res.json(testfound);
    }
  })
})

router.post('/deleteallid', (req,res) => {
  let idT = req.body.IdT
  TestAnswer.deleteMany({IdT: idT}).then( r => {
    res.json(r)
  })
})

module.exports = router;
