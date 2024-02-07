var fs = require("fs");
async function writeToFile(filePath,content) {
  // Implementation
  fs.writeFile(filePath, content, (err, data) => {
    if (err) {
      console.log(err);
      console.log(
        "Error writing to file: ENOENT: no such file or directory..."
      );
    } else {
      console.log(content);
    }
  });
}

writeToFile("test-files/read_txt.txt", "Data written to output1.txt");
