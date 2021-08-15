const http = require('http');
const app = require('./app');
const host =  'localhost';
const port = 3000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));