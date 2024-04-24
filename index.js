const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Test Node JS!\n');
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
