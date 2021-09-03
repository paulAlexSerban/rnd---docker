const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker Node JS example');
});

app.listen(8080, () => {
  console.log('Listening on PORT: 8080');
});