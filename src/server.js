/**
 * @author mmthant03
 * The driver program for this project
 * Do not load your sensitive data here (e.g. API keys, database credentials)
 * Create .env file in root dir
 * Do not implement logics here. 
 * Please break down into controllers and schemas.
 * Helper functions goes into helpers.js
 */

// import your packages
const express = require('express')
const body_parser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')

// import your controller files
const userController = require('./controllers/UserController')

// load your env file
dotenv.config()

// mongodb connection
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGODB_URI, options).then(
    () => {
        console.log("Successfully Connected to MongoDB!")
    },
    error => {
        console.log("Failed in Connecting to MongoDB")
        console.log("ERROR : " + error)
    }
)

// initiate your middlewares and envs
const app = express()
const port = process.env.PORT
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

// only define high level APIs here
// root api
app.get('/', (req, res) => {
    res.send('Commercing App by TheDarkKnights')
})
// users api
app.use('/api/users', userController)

// server
app.listen(port, () => console.log("Server is listening on port " + port))

