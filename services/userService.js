import Users from "../models/userModel.js";

const updateUser = async (body) => {
  const { userId, updates } = body;

  return Users.updateUser({ userId, updates });
};

export { updateUser };
