const express = require("express");
const Test = require('../models/test');

const router = express.Router();

router.get('/maxid', (req,res) => {
  Test.count({}, (err, cnt)=>{
    if(err) console.log(err)
    else
      res.json(cnt);
  })
})

router.post('/delete', (req,res) => {
  let idt = req.body.IdT;
  console.log(idt)
  Test.deleteOne({IdT: idt}).then( r => {
    res.json(r)
  })
})

router.get('/tests', (req,res) => {
  Test.find({}, (err, tests)=>{
    if(err) console.log(err)
    else
      res.json(tests);
  })
})

router.post('/inserttest', (req,res) => {
  const test = new Test(req.body);
  test.save().then( r => {
    res.json(r)
  })
})

module.exports = router;
