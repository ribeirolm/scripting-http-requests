// In another file, create a third function, getAndPrintHTML, which will look very similar to your second function, but accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions. Reuse whatever code you need from part 2 - we're still getting and printing the HTML.



var https = require('https');
var request = require('request');

function getAndPrintHTML (options) {
  https.get(options, function (response){
    response.on('data', function (data){
      for (var i = 0; i < data.length; i++) {
        var chunk = 0;
        chunk += data + '\n';
      }
      console.log('All data received: ', chunk);
    });
  }) ;
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



getAndPrintHTML(requestOptions);