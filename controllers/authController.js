const authService = require("../services/authService.js");
const bcrypt = require("bcryptjs");

// @desc Register user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  let { firstName, lastName, email, password, language, country } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty = !firstName || !lastName || !email || !password;

  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Please add all fields" });
  }

  // Validate that user does not already exist
  const userExists = await authService.findUserBy({ email });

  if (userExists) {
    res.status(400).json({ errMsg: "User already exists" });
  }

  try {
    const newUser = await authService.registerUser({
      firstName,
      lastName,
      email,
      password,
      language,
      country,
    });

    // Remove password from user object
    delete newUser.password;
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to create user" });
  }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty = !email || !password;
  if (isRequiredFieldEmpty) {
    return res.status(400).json({ errMsg: "Missing email or password" });
  }
 
  // Check to see if user exists
  const user = await authService.findUserBy({ email });
  if (!user) {
    return res.status(401).json({ errMsg: "Incorrect email or password" });
  }

  // Validate password
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    return res.status(401).json({ errMsg: "Incorrect email or password" });
  }

  // Remove password from user object
  delete user.password;
  return res.status(200).json(user);
};

module.exports = { registerUser, loginUser };
