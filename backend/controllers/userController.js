const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create and return a json webtoken
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d'})
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // validate credentials
  try {
    const user = await User.login(email, password);
    // create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    // create a user document
    const user = await User.signup(email, password);
    // create a token
    const token = createToken(user._id);
    res.status(200).json({email, token});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = { loginUser, signupUser };