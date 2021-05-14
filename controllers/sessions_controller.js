///////////////////////
// Dependencies
///////////////////////
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

///////////////////////
// Routes
///////////////////////]

// on sessions form submit (log in)
sessions.post('/', (req, res) => {
    console.log(req.body);
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        // Database error
        if (err) {
            console.log(err)
        } else if (!foundUser) {
            // if found user is undefined/null not found etc
            console.log('No user found');
        } else {
            // user is found
            // now let's check if passwords match
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                // add the user to our session
                req.session.currentUser = foundUser
                let secureUser = {
                    picture: foundUser.picture,
                    _id: foundUser._id,
                    username: foundUser.username,
                }
                res.json(secureUser)
                console.log(req.session);
            } else {
                // passwords do not match
                console.log('Password doesn\'t match');
            }
        }
    })
})

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
    })
    console.log('session ended');
    res.json({});
});

///////////////////////
// Export
///////////////////////
module.exports = sessions;