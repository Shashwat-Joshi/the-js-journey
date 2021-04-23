const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// Prefer to use asynchronous methods
fs.readdir("./", function (err, files) {
  if (err) console.log(err);
  else console.log(files);
});
