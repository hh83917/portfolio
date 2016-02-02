var express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = process.env.PORT || 9001;


app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'));










app.listen(port, function() {
  console.log("Listening on port: ", port);
});
