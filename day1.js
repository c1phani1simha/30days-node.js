var fs = require('fs');
async function readFileContent(filePath) {
  // Implementation
  fs.readFile(filePath,'utf-8',  (err, data)=> {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
}


readFileContent("test-files/read_txt.txt");