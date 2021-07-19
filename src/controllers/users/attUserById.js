const verifyUpdateUser = require("../../services/verifyUpdateUser")

module.exports = async (req, res, next) => {
  const { userId } = req.params;
  const data = await verifyUpdateUser(req.body, userId);
  if (data.err === 'user_not_found') return next({
    status: 404,
    message: 'User not found'
  })

  res.status(200).json(data)
}