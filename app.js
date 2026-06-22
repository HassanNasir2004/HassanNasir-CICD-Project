const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello From Jenkins Pipeline! v2 - Hassan Nasir\n');
}).listen(3000, () => {
  console.log('Running on port 3000');
});
