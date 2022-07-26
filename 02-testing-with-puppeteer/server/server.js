const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8000;

http.createServer(function(req, res) {
  console.log(`Request received for '${req.url}'`);
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
}).listen(port, () => console.log(`Listening on port ${port}`));