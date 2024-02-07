const { exec } = require('child_process');
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log('Command output:');
    console.log(stdout);
  })
}

//test cases
executeCommand('ls -la');
executeCommand('echo "Hello,Node.js!"');