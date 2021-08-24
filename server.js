const path = require("path");
const express = require("express");
const app = require("./public/generated/App");

const server = express();

// Update according to routes.
const valid_paths = ['/', '/projects', '/aboutme']

// Should probably leave as-is.
const valid_extensions = ['css']

server.use(express.static(path.join(__dirname, "public")));

server.get("*", function(req, res) {
  // Invalid path rejector, wont send any data.
  if(valid_paths.includes(req.url) || req.url.endsWith(valid_extensions)) {    
    res.write(`
<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='icon' type='image/png' href='favicon.png'/>
<link rel='stylesheet' href='/global.css'>
<link rel='stylesheet' href='generated/bundle.css'>
<link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Recursive:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
<div id="app">${app.render({url: req.url})}
</div>
<script src="generated/bundle.js"></script>
  `);

  res.end();

  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
