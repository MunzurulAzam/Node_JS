const http = require('http');
const server = http.createServer((req, res) => {
    // 
    if (req.url === '/about')
        res.end('The about page')
    else if (req.url === '/contact')
        res.end('The contact page')
    else if (req.url === '/')
        res.end('The home page')
    else {
        req.writeHead(404)
        res.end('page not found')
    }
});
server.listen(4000);

// const http = require('http');

// const hostname = '127.0.0.1'; // localhost
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
