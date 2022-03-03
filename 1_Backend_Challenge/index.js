const fs = require('fs');
const exec = require('child_process').exec; 

// create file called newfile.txt
// code goes here...
fs.writeFile('newfile.txt', 'This is a test from AXEL', (err) => {
  if (err) return console.log(`Error creating file: ${err}`);
  // console.log('File created successfully');
})

// then print contents of directory according to instructions above
// code goes here...
exec('ls', (err, stdout, stderr) => {
  if (err) {
    return console.log(`Error executing files in directory: ${err}`);
  }
  const fileArray = stdout.split('\n').join(', ');
  console.log(fileArray.substring(0, fileArray.length - 2))
});
