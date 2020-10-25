const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const process = require('process')
const PORT = process.env.PORT || 3000

const app = express()
    // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)
    //grabs static assets from public directory
app.use(express.static('public'))

//app.listen should always be last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});