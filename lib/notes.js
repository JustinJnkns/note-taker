const fs = require('fs')
const path = require('path')

function validation(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function noteCreation(body,notesArray) {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        // null indicates no existing data edits and 2 is for white space between values to make code more readable in .json
        JSON.stringify({ notes:notesArray },null,2)
    )
    return note

    };

    module.exports = {
        validation,
        noteCreation
    }