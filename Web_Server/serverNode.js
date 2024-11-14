// server-node.js (new syntax for Node.js 14+)
import http from 'http';

//? old syntax for Node.js
// const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello Ice Tea\n");
    } else if (req.url === '/tea') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end("Thanks for ordering Ice Tea" );
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Page not found\n");
    }  // End of request handler
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});