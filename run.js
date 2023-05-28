/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { exec } = require('child_process');

// Get the current directory
const directoryPath = __dirname + '/build';

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
    console.log(files);
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }

  // Filter out only JavaScript files
  const jsFiles = files.filter(file => file.endsWith('.js'));

  // Run each JavaScript file
  jsFiles.forEach(file => {
    exec(`node ./build/${file}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running file: ${file}\n`, error);
      } else {
        console.log('__________________________________');
        console.log(file);
        console.log(stdout);
      }
    });
  });
});
