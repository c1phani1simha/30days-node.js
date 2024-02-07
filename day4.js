const path = require('path');

function resolvePath(relativepath) {
  const absolutepath = path.resolve(__dirname, relativepath);

  console.log("Resolved relative:",absolutepath);
}

resolvePath("test-files/read_txt.txt");
resolvePath("test-files");