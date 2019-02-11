var https = require('https');
var getHTML = require('../function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path:  '/http-examples/step6/reverse.html'
};

//Prints the html string in reverse order to the console.
function printReverse (html) {
  var stringToArray = html.split('');
  var reversed = stringToArray.reverse();
  var addingReversed = reversed.join('')
  console.log('Reversed', addingReversed);
}

getHTML(requestOptions, printReverse);