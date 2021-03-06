const getAllRecipes = require('./recipes/getAllRecipes');
const getRecipeById = require('./recipes/getRecipeById');
const getRecipeByUser = require('./recipes/getRecipesByUser');
const createRecipe = require('./recipes/createRecipe');
const updateRecipe = require('./recipes/attRecipeByRecipeId');
const deleteRecipe = require('./recipes/deleteRecipe');
const getUserByToken = require('./users/getUserByToken');
const createUser = require('./users/createUser');
const getAllUsers = require('./users/getAllUsers');
const getUserById = require('./users/getUserById');
const attUserById = require('./users/attUserById');
const login = require('./login');
const getCategories = require('./getGategories');

module.exports = {
  getAllRecipes,
  getRecipeById,
  getRecipeByUser,
  createRecipe,
  getUserByToken,
  createUser,
  getAllUsers,
  getUserById,
  attUserById,
  login,
  getCategories,
  updateRecipe,
  deleteRecipe,
}