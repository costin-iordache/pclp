var fs = require('fs');
var array = fs.readFileSync('resources/quotes.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}