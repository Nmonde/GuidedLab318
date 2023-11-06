// console.log("All is alright!")

// console.log("You can do it!!!!")
const http = require("http");
//location and port of server
const hostname = "127.0.0.1"
const port = 3000;

//create server
const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World!\n');
    // res.statusCode = 200;
    // //added
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write('<p>I wonder what else we can send...</p>');
  res.end();
  });

  server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}: ${port}/`)
  })
