const express = require('express');
const path = require('path');

const app = express();
const staticPath = process.argv[3];
const port = process.argv[2];

app.use(express.static(staticPath || path.join(__dirname, 'public')));

app.listen(port);
