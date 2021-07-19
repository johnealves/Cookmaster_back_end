const getAllRecipes = require('./recipes/getAllRecipes');
const getRecipeById = require('./recipes/getRecipeById');
const createUser = require('./users/createUser');
const getAllUsers = require('./users/getAllUsers');
const getUserById = require('./users/getUserById');
const attUserById = require('./users/attUserById');
const login = require('./login');

module.exports = {
  getAllRecipes,
  getRecipeById,
  createUser,
  getAllUsers,
  getUserById,
  attUserById,
  login,
}