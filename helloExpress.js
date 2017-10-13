const express = require('express');

const port = process.argv[2];
const app = express();

app.get('/home', (request, response) => {
  response.end('Hello World!');
});

app.listen(port);
