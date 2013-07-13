var express = require('express');
var app = express();

var data = new Buffer(256);

app.get('/', function(request, response) {
  fs = require('fs');
  data = fs.readFileSync("/home/ubuntu/bitstarter/index.html", "utf-8"); 
  console.log(data);
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

