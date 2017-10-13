const express = require('express');
const bodyParser = require('body-parser');

const port = process.argv[2];

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);
