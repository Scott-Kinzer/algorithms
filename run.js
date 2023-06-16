/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { exec } = require('child_process');

// Get the current directory
const directoryPath = __dirname + '/build';

const runFiles = (err, files, directory) => {
if (err) {
  console.log('Error reading directory:', err);
  return;
}

// Filter out only JavaScript files
const jsFiles = files.filter(file => file.endsWith('.js'));

// Run each JavaScript file
jsFiles.forEach(file => {
  exec(`node ./build/${directory}/${file}`, (error, stdout) => {
    if (error) {
      console.error(`Error running file: ${file}\n`, error);
    } else {
      console.log('__________________________________');
      console.log(file);
      console.log(stdout);
    }
  });
});
};

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Directory issue');
    return;
  }

  const outerDirectories = files;

  fs.readdir(directoryPath + '/' + outerDirectories[0], 
  (err, files) => runFiles(err, files, outerDirectories[0]));

  fs.readdir(directoryPath + '/' + outerDirectories[1], 
  (err, files) => runFiles(err, files, outerDirectories[1]));
});
