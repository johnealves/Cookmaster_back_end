const { verifyNewUser } = require("../../services");


module.exports = async (req, res, next) => {
  const { username, email, password } = req.body;
  const data = await verifyNewUser(username, email, password);
  if (data.err === 'Invalid_entries') return next({ 
    status: 400,
    message: "Invalid entries. Try again.",
  });

  if ( data.err === 'user_already_exists' ) {
    return next({
      status: 409,
      message: "Email or user already registered",
    })
  }

  res.status(201).json(data)
}