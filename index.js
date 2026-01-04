const http = require('http')
const fs = require('fs');


const server = http.createServer((req, res) => {
    res.end('Hello')
})

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080/")
})