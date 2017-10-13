const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/search', (request, response) => {
  response.send(JSON.stringify(request.query));
  response.end();
});

app.listen(port);
