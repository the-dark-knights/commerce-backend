// import your packages
const express = require('express')
const body_parser = require('body-parser')
const dotenv = require('dotenv')

// import your source files
const userController = require('./controllers/UserController')

// load your env file
dotenv.config()

// initiate your middlewares and envs
const app = express()
const port = process.env.PORT

// only define high level APIs here
app.use('/', (req, res) => res.send('Commercing App by TheDarkKnights'))
app.use('/user', userController)

// server
app.listen(port, () => console.log("Server is listening on port " + port))

