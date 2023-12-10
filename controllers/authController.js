import * as authService from "../services/authService.js";

// @desc Register user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  let { email, password, transferCountry } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty = !email || !password || !transferCountry;

  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Please add all fieds" });
  }

  // Validate that user does not already exist
  const userExists = await authService.findUser(email);

  if (userExists) {
    res.status(400).json({ errMsg: "User already exists" });
  }

  try {
    const newUser = await authService.registerUser({
      email,
      password,
      transferCountry,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(err);
    res.status(500).json({ errMsg: "Unable to create user" });
  }
};

export { registerUser };
