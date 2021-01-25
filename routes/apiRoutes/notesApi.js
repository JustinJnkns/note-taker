const router = require('express').Router()
const fs = require('fs')
const {validation,noteCreation,} = require('../../lib/notes')
const {notes} = require('../../db/db.json')
router.get("/notes", (req, res) => {
        res.json(notes)
    });

router.get("/notes/:id", (req, res) => {
        const result = findById(req.params.id, notes);
        if (result) {
          res.json(result);
        } else {
          res.send(404);
        }
      })

router.post('/notes', (req, res) => {
    // set id based off index in array
    req.body.id = notes.length.toString()
    if(!validation (req.body)){
        res.status(400).send('note improperly formatted')
    }else{
    const newNote = noteCreation(req.body,notes)
    res.json(newNote)
    }
})

module.exports = router