const { deleteRecipeById, findRecipeById } = require("../../models/recipes")

module.exports = async (req, res, next) => {
  try {
    const { recipeId } = req.params
    const { userId } = req.user;

    const [recipe] = await findRecipeById(recipeId);
  
    if (userId !== recipe.userId) {
      return next({
        status: 401,
        message:'Not authorized to delete this recipe'
      })
    }

    const data = await deleteRecipeById(recipeId)
    res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}