const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.status(200).send('Hello World Yes Hardik Its Rolling! Yes its working Looks Good.').end();
});

module.exports = app
