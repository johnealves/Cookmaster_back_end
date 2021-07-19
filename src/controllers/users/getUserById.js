const { findUserById } = require("../../models/users")

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const [data] = await findUserById(userId)
    if (!data) return next({ status: 404, message: 'user not found' })
    const { password, ...withOutPassword } = data;

    res.status(200).json(withOutPassword);
  } catch (error) {
    return next({ staus: 500, message: 'bed request' }) 
  }
}