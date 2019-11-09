/**
 * @author mmthant03
 * Use this UserControllers as a template to create other controllers
 */

const express = require('express')
const router = express.Router()
const User = require('../data/UserSchema')

// GET users
router.get('/', async (req, res) => {
    const response = await User.findAll()
    res.status(response.status)
    res.json(response)
})

// POST users
router.post('/', async (req, res) => {
    const username = req.body.user.name
    const role = req.body.user.role
    const response = await User.createUser(username, role)
    res.status(response.status)
    res.json(response)
})

module.exports = router