const express = require ('express')
const mongoose = require ('mongoose')

const app = express()

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017/rsvp'

mongoose.connect(url)

db.on('error',console.error.bind(console.error, 'connection error:'))

db.once('open', () => {
})

responseSchema = mongoose.Schema({
})

const Response = mongoose.model('Response', responseSchema)

app.set('view', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {

})

app.post('/reply', express.urlencoded({ extended: false }), (req, res) => {

})

app.get('guests', (req, res) => {
    
})


