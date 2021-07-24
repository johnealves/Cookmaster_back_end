const { insertNewUser, findUserByEmail, findUserByUsername } = require("../models/users");

const validateUserData = (username, email, password) => {
  if (!username || !email || !password) return { err: "Invalid_entries" };
  if (username.length < 4 || password < 6) return { err: "Invalid_entries" }

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  const regexTest = emailRegex.test(email);
  if (!regexTest) return { err:"Invalid_entries" };

  return {}
}

const verifyUserExist = async (username, email) => {
  const nameUser = await findUserByUsername(username)
  const user = await findUserByEmail(email)
  if (user.length || nameUser.length) return { err: 'user_already_exists' }

  return {}
}

module.exports = async (username, email, password) => {
  const validate = validateUserData(username, email, password);
  if (validate.err) return validate;

  const user = await verifyUserExist(username, email);
  if (user.err) return user;

  const newUser = await insertNewUser(username, email, password);

  return newUser;
}