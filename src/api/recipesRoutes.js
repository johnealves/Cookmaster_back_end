const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.getAllRecipes);

router.get('/:id', controllers.getRecipeById);

module.exports = router;