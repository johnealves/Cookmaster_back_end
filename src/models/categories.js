const connection = require("./connection")

const listAllCategoris = async () => {
  const [list] = await connection.execute(
    'SELECT * FROM category'
  )

  return list;
}

module.exports = {
  listAllCategoris,
}