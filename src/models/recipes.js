const connection = require("./connection")

const listAllRecipes = async () => {
  const [list] = await connection.execute(
    'SELECT r.recipeId as recipeId, r.name as name, r.image as image, u.username as addBy,c.categoryName as category FROM recipes AS r INNER JOIN users AS u ON r.userId = u.userId INNER JOIN category AS c ON r.categoryId = c.categoryId;'
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