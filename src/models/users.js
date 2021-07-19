const connection = require("./connection")

const insertNewUser = async (name, email, password) => {
  const data = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password] 
  )
  
  return {
    name,
    email,
  }
}

const listAllUsers = async () => {
  const [data] = await connection.execute(
    'SELECT userId, name, email, role, status, register FROM users'
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

const updateUserById = async (user, id) => {
  const { name, email, password, status } = user;
  connection.execute(
    'UPDATE users SET name = ?, email = ?, password = ?, status = ? WHERE userId = ?',
    [name, email, password, status, id]
  )

  return {
    userId: id,
    name,
    email,
    status,
  };
}

module.exports = {
  insertNewUser,
  listAllUsers,
  findUserById,
  findUserByEmail,
  updateUserById,
}