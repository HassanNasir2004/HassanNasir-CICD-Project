const http = require('http'0;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello From Jenkins Pipeline! \n);
}).listen(3000, () => console.log('Running on port 3000'));

