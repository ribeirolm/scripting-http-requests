var https = require('https');
module.exports = function getHTML (options, callback) {
   https.get(options, function (response){
    response.on('data', function (data){
      for (var i = 0; i < data.length; i++) {
        var chunk = 0;
        chunk += data + '\n';
      }
      callback(chunk);
    });
  }) ;
};