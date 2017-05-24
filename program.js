var fs = require('fs');
function count (text) {
  var str = text.toString().split('\n').length - 1
  console.log(str);
}
count(fs.readFileSync(process.argv[2]));
