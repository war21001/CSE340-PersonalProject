//begins server and connects the modules/files

const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);