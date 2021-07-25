const verifyUpdateRecipe = require("../../services/verifyUpdateRecipe")

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { recipeId } = req.params;
    const data = await verifyUpdateRecipe(req.body, userId, recipeId)
    if (data.err === 'recipe_not_found') {
      return next({
        status: 404,
        message: 'Recipe not found'
      });
    };
    if (data.err === 'unauthorized') {
      return next({
        status: 401,
        message: 'user not authorized to change this recipe'
      });
    };

    return res.status(200).json(data)
    
  } catch (err) {
    return res.status(500).json({ messge: err.message })
  }
}