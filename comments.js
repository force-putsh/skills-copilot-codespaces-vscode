// Create web server

// $ node comments.js
// Server listening at http://localhost:3000
// $ curl http://localhost:3000
// Hello World!

// Path: comments.js
// Create web server with multiple routes

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('Comments');
});

app.get('/comments/:id', (req, res) => {
  res.send('Comment ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
