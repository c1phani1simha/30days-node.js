var path = require('path');
const { sourceMapsEnabled } = require('process');

function checkFileExtension(filepath, expectedExtension) {
  var extname = path.extname(filepath);
  if (extname!== expectedExtension) {
    console.log(
      "File does not have the expected extension. Expected:" + expectedExtension +  " Actual: " + extname
    );
  }
  console.log("File has the expected extension: " + expectedExtension);
  
}

checkFileExtension("day5.js", ".js");
checkFileExtension("day5.js", ".txt");