import * as authService from "../services/authService.js";
import bcrypt from "bcryptjs";

// @desc Register user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  let { email, password, language, country } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty = !email || !password;

  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Please add all fieds" });
  }

  // Validate that user does not already exist
  const userExists = await authService.findUserBy({ email });

  if (userExists) {
    res.status(400).json({ errMsg: "User already exists" });
  }

  try {
    const newUser = await authService.registerUser({
      email,
      password,
      language,
      country,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(err);
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
    res.status(400).json({ errMsg: "Missing email or password" });
  }

  // Check to see if user exists
  const user = await authService.findUserBy({ email });
  if (!user) {
    res.status(401).json({ errMsg: "Incorrect email or password" });
  }

  // Validate password
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    res.status(401).json({ errMsg: "Incorrect email or password" });
  }

  // Remove password from user object
  delete user.password;
  res.status(200).json(user);
};

export { registerUser, loginUser };
