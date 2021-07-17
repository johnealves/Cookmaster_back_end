const express = require('express');

const controllers = require('../controllers/index');

const app = express();

app.get('/', (req, res) =>{
  res.send('Vamo que vamo!!!')
})

app.get('/recipes', controllers.getAllRecipes);

app.get('/recipes/:id', controllers.getRecipeById);

module.exports = app;