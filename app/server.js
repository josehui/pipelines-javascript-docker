'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/user', (req, res) => {
  res.send('Hello, you are in user page\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);