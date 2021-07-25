const verifyNewRecipe = require("../../services/verifyNewRecipe");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const data = await verifyNewRecipe(req.body, userId)
    if (data.err === 'Invalid_entries') return next({ 
      status: 400,
      message: "Invalid entries. Try again.",
    });

    if (data.err === 'RecipeName_already_used') {
      return next({
        status: 409,
        message: 'Recipe name already used'
      });
    };

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}