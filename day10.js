const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

function staticFileServer(req, res) {
  

  app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
  });

  app.get('/styles/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname,'public','styles','styles.css'));
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}


staticFileServer();