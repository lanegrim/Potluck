///////////////////////
// Dependencies
///////////////////////
const express = require('express');
const recipes = express.Router();
const Recipe = require('../models/recipe.js');

///////////////////////
// Routes
///////////////////////

recipes.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedRecipe) => {
            if (err) {
                res.send(err);
            } else {
                Recipe.find({}, (err, foundRecipes) => {
                    res.json(foundRecipes);
                });
            };
        }
    );
});

recipes.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        Recipe.find({}, (err, foundRecipes) => {
            res.json(foundRecipes);
        });
    });
});

recipes.get('/', (req, res) => {
    Recipe.find({}, (err, foundRecipes) => {
        res.json(foundRecipes)
    });
});

recipes.post('/', (req, res) => {
    Recipe.create(req.body, (err, createdRecipe) => {
        Recipe.find({}, (err, foundRecipes) => {
            if (err) {
                res.send(err);
            }
            res.json(foundRecipes)
        });
    });
});

///////////////////////
// Export
///////////////////////
module.exports = recipes;