const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();

const PORT = 8082;

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  const server = http.createServer(handleRequest);

//begin express
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//get notes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

//turn on PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});