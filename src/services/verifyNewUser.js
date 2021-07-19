const { insertNewUser, findUserByEmail } = require("../models/users");

const validateUserData = (name, email, password) => {
  if (!name || !email || !password) return { err: "Invalid_entries" };
  if (name.length < 4 || password < 6) return { err: "Invalid_entries" }

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  const regexTest = emailRegex.test(email);
  if (!regexTest) return { err:"Invalid_entries" };

  return {}
}

const verifyUserExist = async (email) => {
  const user = await findUserByEmail(email)
  if (user.length) return { err: 'user_already_exists' }

  return {}
}

module.exports = async (name, email, password) => {
  const validate = validateUserData(name, email, password);
  if (validate.err) return validate;

  const user = await verifyUserExist(email);
  if (user.err) return user;

  const newUser = await insertNewUser(name, email, password);

  return newUser;
}