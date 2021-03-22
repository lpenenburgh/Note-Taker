
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
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

    app.delete("/api/notes/:id", (req, res) => {
        
        let noteId = req.params.id

        for (var i = 0; i < db.length; i++) {
            if(db[i].id === noteId) {
                let objectIndex = db.indexOf(db);
                db.splice(objectIndex,1);
            }
        res.send(db);
    }
});
};

uuidv4(); 