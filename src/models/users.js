const connection = require("./connection")

const insertNewUser = async (nameUser, email, password) => {
  const data = await connection.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [nameUser, email, password] 
  )
  
  return {
    nameUser,
    email,
  }
}

const listAllUsers = async () => {
  const [data] = await connection.execute(
    'SELECT userId, username, email, role, status, register FROM users'
  )

  return data;
}

const findUserById = async (id) => {
  const [ user ] = await connection.execute(
    'SELECT * FROM users WHERE userId = ?', [id]
  )

  return user;
}

const findUserByEmail = async (email) => {
  const [ data ] = await connection.execute(
    'SELECT * FROM users WHERE email = ?', [email]
  )

  return data
}

const findUserByUsername = async (username) => {
  const [ data ] = await connection.execute(
    'SELECT * FROM users WHERE username = ?', [username]
  )

  return data
}

const updateUserById = async (user, id) => {
  const { username, email, password, status } = user;
  connection.execute(
    'UPDATE users SET username = ?, email = ?, password = ?, status = ? WHERE userId = ?',
    [username, email, password, status, id]
  )

  return {
    userId: id,
    username,
    email,
    status,
  };
}

module.exports = {
  insertNewUser,
  listAllUsers,
  findUserById,
  findUserByEmail,
  findUserByUsername,
  updateUserById,
}