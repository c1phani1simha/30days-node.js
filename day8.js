const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function positiveIntegerHandler(req, res,next) {
  // Your implementation here
  const number = parseInt(req.query.number);
  if (Number.isInteger(number) && number > 0) {
    next();
  } else {
    const error = new Error('Not a positive number');
    error.status = 400;
    next(error);
  }
}
//Middleware to handle thrown errors from top positiveIntegerHandler function
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
}
app.get("/positive", positiveIntegerHandler, (req, res) => {
  res.send(`it is a positive integer!!`);
});

app.listen(port);
