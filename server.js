//import HTTP + fs + url module
const http = require('http'),
  fs = require('fs'),
  url = require('url');

/*request handler: this function will be called
every time an HTTP request is made against that server*/
http.createServer((request, response) => {
  let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';

//logs all requests to the server
  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.');
    }
  });

//parses requests and pieces together the filePath the user put in
  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

//first parameter detects errors, the second for successful completion
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

//server listens to requests on port 8080
}).listen(8080);
console.log('My test server is running on Port 8080.');
