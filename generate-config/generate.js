// include node fs module
var fs = require('fs');

const args = process.argv.slice(2)

// writeFile function with filename, content and callback function
fs.writeFile('config.yaml', 'Generated Using NODE.JS ${args[0]}', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
