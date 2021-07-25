const connection = require("./connection")

const listAllRecipes = async () => {
  const [list] = await connection.execute(
    'SELECT r.recipeId as recipeId, r.name as name, r.image as image, u.username as addBy,c.categoryName as category FROM recipes AS r INNER JOIN users AS u ON r.userId = u.userId INNER JOIN category AS c ON r.categoryId = c.categoryId;'
  )

  return list;
}

const listRecipesByUser = async (userId) => {
  const [list] = await connection.execute(
    'SELECT r.recipeId as recipeId, r.name as name, r.image as image, u.username as addBy,c.categoryName as category FROM recipes AS r INNER JOIN users AS u ON r.userId = u.userId INNER JOIN category AS c ON r.categoryId = c.categoryId WHERE r.userId = ?;',
    [userId]
  )

  return list;
}

const findRecipeById = async (id) => {
  const [recipe] = await connection.execute(
    'SELECT * FROM recipes WHERE recipeId = (?)', [id]
  )

  return recipe;
}

const findRecipeByName = async (name) => {
  const [recipe] = await connection.execute(
    'SELECT * FROM recipes WHERE name = (?)', [name]
  )

  return recipe;
}

const insertNewRecipe = async (
  recipe,
  userId,
  ) => {
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
  } = recipe;
  console.log(ingredient9)
  const newRecipe = await connection.execute(
    'INSERT INTO recipes (name, userId, categoryId, preparation, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      name,
      userId,
      categoryId,
      preparation,
      image,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
      ingredient11,
      ingredient12,
      ingredient13,
      ingredient14,
      ingredient15,
      ingredient16,
      ingredient17,
      ingredient18,
      ingredient19,
      ingredient20
    ]
  )

  return {
    recipeId: newRecipe[0].insertId,
    name,
  }
}

const updateRecipe = (recipe, userId, recipeId) => {
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
  } = recipe;

  connection.execute(
    'UPDATE recipes SET name=?, userId=?, categoryId=?, preparation=?, image=?, ingredient1=?, ingredient2=?, ingredient3=?,ingredient4=?,ingredient5=?,ingredient6=?,ingredient7=?,ingredient8=?,ingredient9=?,ingredient10=?,ingredient11=?,ingredient12=?,ingredient13=?,ingredient14=?,ingredient15=?,ingredient16=?,ingredient17=?,ingredient18=?,ingredient19=?,ingredient20=? WHERE recipeId = ?',
    [
      name,
      userId,
      categoryId,
      preparation,
      image,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
      ingredient11,
      ingredient12,
      ingredient13,
      ingredient14,
      ingredient15,
      ingredient16,
      ingredient17,
      ingredient18,
      ingredient19,
      ingredient20,
      recipeId
    ]
  )
  
  return {
    recipeId,
    name,
  }
}

const deleteRecipeById = async (recipeId) => {
  connection.execute(
    'DELETE FROM recipes WHERE recipeId = ?', [recipeId]
  )

  return { deletedRecipeId: recipeId }
}

module.exports = {
  listAllRecipes,
  listRecipesByUser,
  findRecipeById,
  findRecipeByName,
  insertNewRecipe,
  updateRecipe,
  deleteRecipeById,
}