const { listAllUsers } = require("../../models/users")

module.exports = async (req, res, next) => {
  try {
    const data = await listAllUsers()

    res.status(200).json(data)
  } catch (error) {
    return next({ status: 500, message: 'bad request' })
  }
}