const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();

var PORT = process.env.PORT || 8080;

function handleRequest(request, response) {
    response.end("It Works!! Path Hit: " + request.url);
  }


//begin express
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//get notes


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


//turn on PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});