import http from "http";
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello world first server");
    res.end();
  }

  if (req.url == "/shashwat") {
    res.write("Hello this is Shashwat");
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
