var fs = require('fs');

fs.readFile('config.yaml', function(err, data) {
  console.log(data);
});
