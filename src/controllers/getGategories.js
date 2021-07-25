const { listAllCategoris } = require("../models/categories")

module.exports = async (req, res, next) => {
  try {
    const data = await listAllCategoris();
  
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}