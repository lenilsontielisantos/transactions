const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3333);

module.exports = server;