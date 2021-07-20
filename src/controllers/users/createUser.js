const { verifyNewUser } = require("../../services");


module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = await verifyNewUser(name, email, password);
  if (data.err === 'Invalid_entries') return next({ 
    status: 400,
    message: "Invalid entries. Try again.",
  });

  if ( data.err === 'user_already_exists' ) {
    return next({
      status: 409,
      message: "Email already registered",
    })
  }

  res.status(201).json(data)
}