const getAllRecipes = require('./recipes/getAllRecipes');
const getRecipeById = require('./recipes/getRecipeById');
const getRecipeByUser = require('./recipes/getRecipesByUser');
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
  createUser,
  getAllUsers,
  getUserById,
  attUserById,
  login,
  getCategories,
}