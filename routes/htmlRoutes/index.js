const path = require('path')
const router = require('express').Router()
    //creates server homepage
router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'))
    })
    //creates notes html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router