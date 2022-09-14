const fs = require("fs");
const http = require("http");
const Name = "Guru";
fs.writeFile(
  "index.html",
  `<h1> Hello World </h1><p> This is ${Name}... </p>`,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
fs.readFile("index.html", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const server = http.createServer((req, res) => {
    res.writeHead(200, "text/html");
    res.write(data);
    res.end();
  });
  server.listen(5000, () => console.log("Server is Up At 5000"));
});
