const { listAllRecipes } = require("../models/recipes")

module.exports = async (req, res, next) => {
  const recipes = await listAllRecipes();

  return res.status(200).json(recipes);
}