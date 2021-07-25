const { updateRecipe, findRecipeById } = require("../models/recipes");

const validateUpdateRecipe = async (body, userId, recipeId) =>{
  const { 
    name,
    categoryId,
    preparation,
    image = "https://cookmaster-back-end.herokuapp.com/images/cookmaster.jpeg",
    ingredient1 = null,
    ingredient2 = null,
    ingredient3 = null,
    ingredient4 = null,
    ingredient5 = null,
    ingredient6 = null,
    ingredient7 = null,
    ingredient8 = null,
    ingredient9 = null,
    ingredient10 = null,
    ingredient11 = null,
    ingredient12 = null,
    ingredient13 = null,
    ingredient14 = null,
    ingredient15 = null,
    ingredient16 = null,
    ingredient17 = null,
    ingredient18 = null,
    ingredient19 = null,
    ingredient20 = null,
  } = body;
  let [recipe] = await findRecipeById(recipeId);
  if (!recipe) return { err: 'recipe_not_found' };

  if (recipe.userId !== userId) return { err: 'unauthorized' }

  recipe.name = name;
  recipe.categoryId = categoryId,
  recipe.preparation = preparation,
  recipe.image = image;
  recipe.ingredient1 = ingredient1;
  recipe.ingredient2 = ingredient2;
  recipe.ingredient3 = ingredient3;
  recipe.ingredient4 = ingredient4;
  recipe.ingredient5 = ingredient5;
  recipe.ingredient6 = ingredient6;
  recipe.ingredient7 = ingredient7;
  recipe.ingredient8 = ingredient8;
  recipe.ingredient9 = ingredient9;
  recipe.ingredient10 = ingredient10;
  recipe.ingredient11 = ingredient11;
  recipe.ingredient12 = ingredient12;
  recipe.ingredient13 = ingredient13;
  recipe.ingredient14 = ingredient14;
  recipe.ingredient15 = ingredient15;
  recipe.ingredient16 = ingredient16;
  recipe.ingredient17 = ingredient17;
  recipe.ingredient18 = ingredient18;
  recipe.ingredient19 = ingredient19;
  recipe.ingredient20 = ingredient20;

  return recipe;
}

module.exports = async (body, userId, recipeId) => {
  const recipe = await validateUpdateRecipe(body, userId, recipeId);
  if (recipe.err)return recipe;

  const data = await updateRecipe(recipe, userId, recipeId);
  
  return data;
}