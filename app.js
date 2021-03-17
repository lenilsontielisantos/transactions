const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');
const db = require('./configurations/Database');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL || db.URL, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connection sucessfull');    
}).catch(err => {
  console.error('Database connection error', err);
  process.exit(1);
});

module.exports = app;