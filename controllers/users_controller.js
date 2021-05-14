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
    if (req.body.picture === "") {
        req.body.picture = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    }
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