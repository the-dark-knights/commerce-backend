const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User page at /')
})

router.post('/create', (req, res) => {
    res.send('User page at /create')
})

module.exports = router