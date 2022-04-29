const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('./routes/users-route')
const usersTokenRouter = require('./routes/users-route-usertoken')

const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Bestimmen an welcher Route die Router antworten wird.
app.use('/', usersTokenRouter)
app.use('/management', usersRouter)

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Snap! Etwas ist gebrochen.')
})

app.use(function (req, res, next) {
    res.status(404).send('Sorry, wir konnten es nicht finden!')
})

app.listen(PORT, function() {
    console.log(`Server laeuft an der Port ${PORT}`)
})