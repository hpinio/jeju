var app = require('../app');
var http = require('http');

app.set('port', process.env.PORT || 1337);

var server = http.createServer(app);

server.listen(port);