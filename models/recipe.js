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
    ingredients: { type: String, required: true },
    method: { type: String, required: true },
    duration: { type: String, },
    tags: { type: String },
});

const Recipe = mongoose.model('Recipe', recipeSchema)

///////////////////////
// Export
///////////////////////
module.exports = Recipe;