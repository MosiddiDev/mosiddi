var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())

app.set('port', (process.env.PORT || 5001));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
  res.sendfile('./build/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
