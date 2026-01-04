const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
    });
})

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080/")
})