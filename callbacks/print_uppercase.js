var https = require('https');
var getHTML = require('../function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path:  '/http-examples/step6/uppercase.html'
};

//Transforms the html string into ALL CAPS and prints it to the console.
function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);

