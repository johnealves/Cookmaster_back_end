const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/users');

const secret = 'plusUltra';

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next({ status: 404, message: 'Invalid entries, "email" and "password" is required' })
  }

  const [data] = await findUserByEmail(email);

  if (!data || password !== data.password) {
    return next({ status: 400, message: 'Invalid entries, "email" or "password" incorrect' })
  }

  jwtConfig = {
    expiresIn: '1d',
    algorithm: "HS256",
  }

  const token = jwt.sign({ data }, secret, jwtConfig)

  res.status(200).json({ token });
}