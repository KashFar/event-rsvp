const express = require ('express')
const mongoose = require ('mongoose')

const app = express()

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017/rsvp'

mongoose.connect(url, {useNewUrlParser: true} //bc we got parser error when doing nodemon
    )
// this sets the variable equal to a connection in the assessment 
const db = mongoose.connection


db.on('error',console.error.bind(console.error, 'connection error:'))

db.once('open', () => {
})      //peter says don't need

//schema defines the model, schema tells the model what it looks like
// and then create new instances of that model, those are the actual messages
responseSchema = mongoose.Schema({
    name: String,
    email: String,
    attending: Boolean,
    guests: Number
})

// app.post('/updates', (req, res) => {
//     // ...
//     userResponse.save(function (err, userResponse) {
//         if (err) {
//             console.log("Error")
//         }
//         res.render("reply")
//     })
// })

const Response = mongoose.model('Response', responseSchema)
app.use(express.urlencoded())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render("index")
})

// app.set('views', './views')

app.post("/reply", (req, res) => {
    const userResponse = new Response ({
        name:  req.body.name,
        email: req.body.email,
        attending: Number(req.body.attending),
        guests: req.body.guestSelect   // had addOns before
    })

    userResponse.save(function(err, userResponse){
        if (err) {
            console.log("Error")
        }
        res.render("reply")
    })
})

app.get("/guests", (req, res) => {
        Response.find(function (err, userResponse) {
            if (err) {
                console.log("Error")
            }
            res.render("guests", {
                userResponse: userResponse
            })
        })
    })

app.listen(port)

