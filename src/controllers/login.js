const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/users');

const secret = 'plusUltra';

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({ status: 404, message: 'Invalid entries, "username" and "password" is required' })
  }

  const [data] = await findUserByUsername(username);

  if (!data || password !== data.password) {
    return next({ status: 400, message: 'Invalid entries, "username" or "password" incorrect' })
  }

  jwtConfig = {
    expiresIn: '1d',
    algorithm: "HS256",
  }

  const token = jwt.sign({ data }, secret, jwtConfig)

  res.status(200).json({ token });
}