const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const secret_key = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
  // Your implementation here
  
  const token = req.params.token;
  
  if (!token) {
    console.log("Unauthorized: No token provided");
    return res.status(401).json({ error: "Unauthorized: No token provided - 1" });
    
  }
  if (token !== secret_key) {
    console.log("Unauthorized: No token provided");
    return res.status(401).json({ error: "Unauthorized: No token provided - 2" });
    
  } else {
    next();
  }
 
  
}

app.get('/token/:token', authenticationMiddleware, (req, res) => {
  res.send('this is a protected route');
})

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});