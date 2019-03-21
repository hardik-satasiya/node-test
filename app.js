const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.status(200).send('Hello World Yes Hardik Its Rolling!').end();
});

module.exports = app
