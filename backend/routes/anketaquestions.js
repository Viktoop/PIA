const express = require("express");
const Anketaquestion = require('../models/anketaquestion');

const router = express.Router();


router.get('/maxid', (req,res) => {
  Anketaquestion.count({}, (err, cnt)=>{
    if(err) console.log(err)
    else
      res.json(cnt);
  })
})

router.post('/insertquestion', (req,res) => {
  const anketaquestion = new Anketaquestion(req.body.question);
  anketaquestion.IdQ = req.body.nextId;
  anketaquestion.save().then( r => {
    res.json(r)
  })
})

router.get('/getquestions', (req,res) => {
  Anketaquestion.find({}, (err, questions) => {
    if(err) console.log(err)
    else
      res.json(questions)
  })
})

module.exports = router;
