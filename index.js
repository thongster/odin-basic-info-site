const express = require("express");
const app = express();
app.use(express.static("./"));

// app.get("/", (req, res) => res.send("index.html"));

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});



// const server = http.createServer((req, res) => {
//     const urlPath = req.url;
//     console.log(urlPath)

//     if (urlPath === '/') {
//         fs.readFile("./index.html", (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('server error')
//             return
//         }
//         res.end(data)

//         });
//     } else if (urlPath === '/about') {
//         fs.readFile("./about.html", (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('server error')
//             return
//         }
//         res.end(data)
//         });
//     } else if (urlPath === '/contact-me') {
//         fs.readFile("./contact-me.html", (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('server error')
//             return
//         }
//         res.end(data)
//         });
//     } else if (urlPath === "/style.css") {
//         fs.readFile("./style.css", (err, data) => {
//             if (err) {
//                 res.statusCode = 404;
//                 res.end("CSS not found");
//                 return;
//             }

//             res.writeHead(200, { "Content-Type": "text/css" });
//             res.end(data);
//         });
//     } else {
//         fs.readFile("./404.html", (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('server error')
//             return
//         }
//         res.end(data)
//         });
//     }
    
// })