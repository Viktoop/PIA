const express = require("express");
const User = require('../models/user');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save().then(user => {
      res.status(200).json({'user':'created'});
    }).catch(err=>{
    res.status(400).json(null);
})
});

router.post('/login', (req, res, next) => {
  let logindata = req.body;
  User.findOne({username: logindata.username, password: logindata.password}).then( user => {
    if(!user){
      res.status(200).json(null);
    } else {
      res.status(200).json(user);
    }
  })
});

router.post('/numemails', (req, res, next) =>{
  User.countDocuments({email: req.body.e}, (err, count) => {
    if(count === 2){
      res.status(200).json({'num':count});
    } else {
      res.status(200).json(null);
    }
  })
});

router.post('/changepassword', (req, res, next) => {
  const data = req.body;
  User.findOneAndUpdate({ username: data.username}, {password: data.password}).then( (data) => {
    res.status(200).json(data);
  })
});

router.get('/getallusers', (req, res, next) => {
  User.find().then( (data) => {
    res.status(200).json(data);
  })
});

router.post('/approve', (req, res, next) => {
  const data = req.body;
  User.findOneAndUpdate({username: data.username}, {approved: true}).then( (data) => {
    res.status(200).json(data);
  })
});

router.post('/delete', (req, res, next) => {
  const data = req.body;
  User.deleteOne({username: data.username}).then( (data) => {
    res.status(200).json(data);
  })
})

module.exports = router;
