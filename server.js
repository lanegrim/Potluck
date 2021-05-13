///////////////////////
// Dependencies
///////////////////////
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();

///////////////////////
// Config
///////////////////////
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT;

///////////////////////
// Middleware
///////////////////////
app.use(express.json())
app.use(express.static('public'))

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);
///////////////////////
// Controllers
///////////////////////
const recipesController = require('./controllers/recipes_controller.js');
app.use('/recipes', recipesController);

const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

///////////////////////
// Routes
///////////////////////

///////////////////////
// Connections
///////////////////////
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('error', err =>
    console.log(err.message, ' is Mongod not running?/Problem with Atlas Connection?'))
mongoose.connection.on('connected', () =>
    console.log('mongo connected: ', MONGODB_URI))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


///////////////////////
// Listener
///////////////////////
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});