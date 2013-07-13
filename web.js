var express = require('express');
var app = express();

var data = new Buffer(256);

app.get('/', function(request, response) {
  fs = require('fs');
  fs.readFileSync('index.html', 'utf-8', function (err, data) {
    if (err) {
       return console.log(err);
    }
    response.send('data');
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
