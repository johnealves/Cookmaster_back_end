const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const authenticationJwt = require('../middlewares/authenticationJwt');

router.get('/', controllers.getAllRecipes);
router.get('/user', authenticationJwt, controllers.getRecipeByUser);
router.get('/:id', controllers.getRecipeById);
router.post('/', authenticationJwt, controllers.createRecipe);
router.put('/update/:recipeId', authenticationJwt, controllers.updateRecipe);
router.delete('/delete/:recipeId', authenticationJwt, controllers.deleteRecipe);

module.exports = router;