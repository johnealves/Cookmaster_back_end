const connection = require("./connection")

const listAllRecipes = async () => {
  const [list] = await connection.execute(
    'SELECT * FROM recipes'
  )

  return list;
}

const findRecipeById = async (id) => {
  const [recipe] = await connection.execute(
    'SELECT * FROM recipes WHERE recipeId = (?)', [id]
  )

  return recipe;
}

module.exports = {
  listAllRecipes,
  findRecipeById,
}