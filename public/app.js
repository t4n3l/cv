const express = require('express');
const path = require('path');
const app = express();
const data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('index', { ...data });
});