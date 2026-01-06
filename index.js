const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("./")) // read static pages, in this case for css

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"))
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"))
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"))
})

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


