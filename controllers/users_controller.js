///////////////////////
// Dependencies
///////////////////////
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')


///////////////////////
// Routes
///////////////////////
// users.get('/new', (req, res) => {
//     User.find({}, (err, foundUser) => {
//         res.json(foundUser)
//     });
// });

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        User.find({}, (err, foundUser) => {
            if (err) {
                res.send(err);
            }
            console.log(foundUser)
            res.json(foundUser)
        });
    });
});

///////////////////////
// Export
///////////////////////
module.exports = users;