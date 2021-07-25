const { listRecipesByUser } = require("../../models/recipes");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.user;
  
    const data = await listRecipesByUser(userId);
    
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }  
}