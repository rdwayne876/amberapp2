const express = require('express');
const app = express();

const indexRoute = require('./routes/index')
const notesRoute = require('./routes/notes')

//set ejs as view engine
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRoute)
app.use('/notes', notesRoute)


app.listen(8080);
console.log('Server is listening on port 8080');