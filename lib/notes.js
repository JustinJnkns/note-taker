const { json } = require('express');
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

function noteCreation(body, ) {
    const note = JSON.parse(data)

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes })
    }

    module.exports = {
        validation,
        noteCreation
    };