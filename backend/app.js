const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const ankete = require('./routes/anketa');
const tests = require('./routes/test');
const anketaAnswer = require('./routes/anketaanswer');
const testAnswer = require('./routes/testanswer');
const anketaQuestions = require('./routes/anketaquestions');
const testQuestions = require('./routes/testquestions');

const app = express();

const db = "mongodb://localhost:27017/piadb"
mongoose.connect(db).then(() => {
  console.log('Connected to piadb!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/user', userRoutes);
app.use('/api/anketa', ankete)
app.use('/api/anketaanswer', anketaAnswer)
app.use('/api/anketaquestion', anketaQuestions)
app.use('/api/test',tests)
app.use('/api/testanswer', testAnswer)
app.use('/api/testquestion', testQuestions)



module.exports = app;
