const express = require("express");
const TestQuestion = require('../models/testquestion');

const router = express.Router();


router.get('/maxid', (req,res) => {
  TestQuestion.count({}, (err, cnt)=>{
    if(err) console.log(err)
    else
      res.json(cnt);
  })
})

router.post('/insertquestion', (req,res) => {
  const testquestion = new TestQuestion(req.body.question);
  testquestion.IdQ = req.body.nextId;
  testquestion.save().then( r => {
    res.json(r)
  })
})

router.get('/getquestions', (req,res) => {
  TestQuestion.find({}, (err, questions) => {
    if(err) console.log(err)
    else
      res.json(questions)
  })
})

module.exports = router;
