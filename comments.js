// Create web server
// Create a web server that listens for requests on port 3000.

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.end(data);
        });
    } else if (pathname === '/comments') {
        if (req.method === 'GET') {
        res.end('GET request');
        } else if (req.method === 'POST') {
        res.end('POST request');
        } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
    });
