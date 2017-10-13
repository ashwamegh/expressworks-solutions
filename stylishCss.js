const express = require('express');

const port = process.argv[2];

const path = require('path');

const templatePath = process.argv[3];

const app = express();

app.use(express.static(templatePath || path.join(__dirname, 'public')));

app.use(require('stylus').middleware(`${__dirname}/public`));

app.listen(port);
