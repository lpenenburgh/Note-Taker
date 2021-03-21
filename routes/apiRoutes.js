const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const db = require("../db/db.json")


module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.send(db);
    });

    app.post("/api/notes", (req, res) => {
        let newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text

        };
        db.push(newNote);
        res.send(newNote);
    });

};