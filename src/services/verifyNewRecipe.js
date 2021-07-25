const { findRecipeByName, insertNewRecipe } = require("../models/recipes");

const validateRecipe = async (recipe) => {
  const { name, categoryId, preparation,  } = recipe;

  if (!name || !categoryId || !preparation) {
    return { err: 'Invalid_entries' }
  }

  const checkname = await findRecipeByName(name)
  if (checkname.length) return { err: 'RecipeName_already_used' };

  return {}
}

module.exports = async (recipe, userId) => {
  const validate = await validateRecipe(recipe)
  if (validate.err) return validate;

  const newRecipe = await insertNewRecipe(recipe, userId)

  return newRecipe;
}