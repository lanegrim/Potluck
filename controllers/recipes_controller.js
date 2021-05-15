///////////////////////
// Dependencies
///////////////////////
const express = require('express');
const recipes = express.Router();
const Recipe = require('../models/recipe.js');
const recipesSeed = require('../models/recipes_seed.js')

///////////////////////
// Routes
///////////////////////

recipes.get('/seed', (req, res) => {
    Recipe.insertMany(recipesSeed, (err, manyRecipes) => {
        if (err) {
            res.send(err);
        }
        res.redirect('/recipes');
    });
});

recipes.put('/:id', (req, res) => {
  if (!req.body.image.includes("https://")) {
    req.body.image = "https://www.medline.com/media/spc/300x300/48x48/GCO01082320.jpg"
  }
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
  if (!req.body.image.includes("https://")) {
    req.body.image = "https://www.medline.com/media/spc/300x300/48x48/GCO01082320.jpg"
  }
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
