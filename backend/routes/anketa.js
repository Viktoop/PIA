const express = require("express");
const Anketa = require('../models/anketa');

const router = express.Router();

router.get('/maxid', (req,res) => {
  Anketa.count({}, (err, cnt)=>{
    if(err) console.log(err)
    else
      res.json(cnt);
  })
})

router.post('/delete', (req,res) => {
  let ida = req.body.IdA;
  Anketa.deleteOne({IdA: ida}).then( r => {
    res.json(r)
  })
})

router.get('/ankete', (req,res) => {
  Anketa.find({}, (err, ankete)=>{
    if(err) console.log(err)
    else
      res.json(ankete);
  })
})

router.post('/insertanketa', (req,res) => {
  const anketa = new Anketa(req.body);
  anketa.save().then( r => {
    res.json(r)
  })
})

module.exports = router;
