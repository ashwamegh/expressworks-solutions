const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.argv[2];
const filePath = process.argv[3];


app.use(express.static(path.join(__dirname, 'public')));

app.get('/books', (request, response) => {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    response.json(JSON.parse(data));
    response.end();
  });
});

app.listen(port);
