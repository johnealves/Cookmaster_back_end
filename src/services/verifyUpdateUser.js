const { updateUserById, findUserById } = require("../models/users")

const validateUpdateUser = async (body, id) =>{
  const { name, password, email, status } = body;
  let [user] = await findUserById(id);

  if (!user) return { err: 'user_not_found' };

  if (name) {
    user.name = name;
  }

  if (password) {
    user.password = password;
  }

  if (email) {
    user.email = email;
  }

  if (status) {
    user.status = status;
  }

  return user;
}

module.exports = async (body, id) => {
  const user = await validateUpdateUser(body, id)
  if (user.err === 'user_not_found')return user;

  const data = await updateUserById(user, id)
  
  return data;
}