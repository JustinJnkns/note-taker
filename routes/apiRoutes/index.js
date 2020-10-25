const router = require('express').Router()
const notesRoutes = require('../apiRoutes/notesApi')

router.use(notesRoutes)

module.exports = router