///////////////////////
// Dependencies
///////////////////////
const mongoose = require('mongoose')

///////////////////////
// Schema
///////////////////////
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: Array, required: true },
    methods: { type: Array, required: true },
    type: { type: String },
    duration: { type: String, },
});

const Recipe = mongoose.model('Recipe', recipeSchema)

///////////////////////
// Export
///////////////////////
module.exports = Recipe;