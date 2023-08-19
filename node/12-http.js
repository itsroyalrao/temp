const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to homepage");
  if (req.url === "/about") res.end("Welcome to about page");
  res.end(`<h1>OOPS!</h1>
  <p>Page not found!</p>
  <a href="/">Go to homepage</a>`);
});

server.listen(4000);
