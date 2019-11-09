/**
 * @author mmthant03
 * Use this UserSchema as a template to create other models
 */

const mongoose = require('mongoose')
const helper = require('../helpers')

/**
 * The permitted SchemaTypes are
 * String
 * Number
 * Date
 * Buffer
 * Boolean
 * Mixed
 * ObjectId
 * Array
 */

 // define a base model for anydb
User = {
    id : String,
    name : String,
    role : {
        type: String, 
        lowercase: true, 
        enum: [
            'admin',
            'moderator',
            'user'
        ]
    }
}

// create a mongodb schema
const Schema = mongoose.Schema
const userSchema = new Schema(User)

// create a mongodb model
const userModel = mongoose.model('User', userSchema)

// CRUD
// currently debating whether parameters should be an object instead

// create user(s)
/**
 * Create a new User data in mongodb collection
 * ID is auto-created when using this function
 * @param String name: full name of a user
 * @returns Object status: status code, messages, response from database
 */
createUser = async (name, role) => {
    const newUser = new userModel({
        id : helper.generateId(),
        name : name,
        role : role
    })
    let savedUser = {}
    try {
        const savedUser = await newUser.save()
    } catch (err) {
        console.log(err)
        return helper.setStatus(500, err)
    }
    console.log(savedUser)
    return helper.setStatus(200, 'Successfully saved User Data', savedUser)
} 

// find user(s)
/**
 * Return all users
 * @returns Object status: status code, messages, response from database
 */
findAll = async () => {
    let users = {}
    try{
        users = await userModel.find()
    } catch (err) {
        console.log(err)
        return helper.setStatus(500, err)
    }
    return helper.setStatus(200, 'Successfully retrieved', users)
}

// update user(s)

// delete user(s)

// export all functions
module.exports = {
    createUser : createUser,
    findAll : findAll
}