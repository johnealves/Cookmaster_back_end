const { findRecipeById } = require('../models/recipes');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const [ recipe ] = await findRecipeById(id)
  if (!recipe) return res.status(404).json({ message: 'recipe not found' });

  return res.status(200).json(recipe);
};