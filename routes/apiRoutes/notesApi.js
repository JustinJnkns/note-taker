const router = require('express').Router()
const fs = require('fs')
const { notes } = require("../../db/db.json")
const { validation, noteCreation } = require('../../lib/notes')

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", function(err, contents) {
        var results = JSON.parse(contents);
        res.send(results);
    });
});


router.post('/notes', (req, res) => {
    console.log(req.body)
    res.json(req.body)

})

module.exports = router