const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/users');

secret = 'plusUltra';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next({ status: 404, message: 'Token is required' })
  
    const payload = jwt.verify(token, secret);
    const [data] = await findUserByEmail(payload.data.email);
    if (!data) {
      return next({ status: 401, message: 'Unauthorized' });
    }

    const { password, ...userWithoutPassword } = data
  
    req.user = userWithoutPassword;
    next()
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
}