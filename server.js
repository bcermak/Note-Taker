const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", function (req, res) {
    let noteData = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(noteData);
    console.log(notes);
    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    let data = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(data);
    let newNote = req.body;
    newNote.id = notes.length + 1;
    console.log(newNote);
    notes.push(newNote);
    console.log(notes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    return res.json(newNote);

});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});