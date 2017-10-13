const express = require('express');

const port = process.argv[2];

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.put('/message/:id', (request, response) => {
  const res = require('crypto')
    .createHash('sha1').update(new Date().toDateString() + request.params.id).digest('hex');
  response.end(res);
});

app.listen(port);
