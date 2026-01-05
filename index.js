const http = require('http')
const fs = require('fs');
const urlPath = req.url;

const server = http.createServer((req, res) => {
    if (urlPath === './index.html' || urlPath === '/') {
        fs.readFile("./index.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('server error')
        }
        res.end(data)
        });
    } else if (urlPath === './about.html') {

    } else if (urlPath === './contact-me.html') {

    } else {
        
    }

})

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080/")
})