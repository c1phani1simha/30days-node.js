const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function greetHandler(req, res) {
  // Your implementation here

  if (req.query.name) {
    res.send(`Hello ${req.query.name}!`);
  }
  else {
    res.send("Hello,Guest!");
  }
}

app.get('/greet', greetHandler);
app.listen(port);
