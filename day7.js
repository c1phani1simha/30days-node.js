const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



function requestLoggerMiddleware(req, res, next) {
  // Your implementation here
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}
app.use(requestLoggerMiddleware);
app.get('/',(req,res) => {
  res.send('Hello World!');
});

app.listen(port);
