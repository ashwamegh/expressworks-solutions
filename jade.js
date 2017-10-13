const express = require('express');

const port = process.argv[2];
const templatePath = process.argv[3];

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', templatePath || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(port);
