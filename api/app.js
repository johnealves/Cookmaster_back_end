const express = require('express');
const cors = require('cors');

const controllers = require('../controllers/index');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/', (req, res) =>{
  res.send('Vamo que vamo!!!')
})

app.get('/recipes', controllers.getAllRecipes);

app.get('/recipes/:id', controllers.getRecipeById);

module.exports = app;