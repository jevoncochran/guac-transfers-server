import bcrypt from "bcryptjs";
import Users from "../models/userModel.js";

const registerUser = async (user) => {
  let { password } = user;
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  return Users.registerUser({ ...user, password });
};

const findUser = async (email) => {
  return Users.findUserBy({ email });
};

export { registerUser, findUser };
