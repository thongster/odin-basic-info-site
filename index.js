const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === './index.html' || urlPath === '/') {
        fs.readFile("./index.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
        });
    } else if (urlPath === './about.html') {
        fs.readFile("./about.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
        });
    } else if (urlPath === './contact-me.html') {
        fs.readFile("./contact-me.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
        });
    } else {
        fs.readFile("./404.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
        });
    }

})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})