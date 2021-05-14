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
    type: { type: String, required: true },
    duration: { type: String, required: true },
    owner: { type: String, required: true },
    ownerPicture: { type: String, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema)

///////////////////////
// Export
///////////////////////
module.exports = Recipe;