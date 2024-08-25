const http = require("http");
const fs = require("fs");

const sercer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is the Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is the About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is the contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.write("File create not found");
        res.end();
      } else {
        res.write("File is successful!");
        res.end();
      }
    });
  } else {
    res.write("Page not found!");
    res.end();
  }
});

sercer.listen(5500, () => {
  console.log("it is listening on port : 5500");
});
