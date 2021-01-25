const router = require('express').Router()
const fs = require('fs')
const {validation,noteCreation} = require('../../lib/notes')
const {notes} = require('../../db/db.json')
router.get("/notes", (req, res) => {
        res.json(notes)
    });



router.post('/notes', (req, res) => {
    const newNote = noteCreation(req.body,notes)
    res.json(newNote)

})

module.exports = router