const http = require('http');
const routes = require('./routes');

//This callback function returns a server, so we encapsulate that into a variable. With this variable we can now listen
const server = http.createServer(routes);
//This tells the server to listen to request on port 3000
server.listen(3000);