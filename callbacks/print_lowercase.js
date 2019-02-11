var https = require('https');
var getHTML = require('../function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path:  '/http-examples/step6/lowercase.html'
};

//Transforms the html string into lowercase and prints it to the console.
function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);