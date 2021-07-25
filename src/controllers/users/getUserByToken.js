module.exports = async (req, res, next) => {
  try {
    const { user } = req;
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}