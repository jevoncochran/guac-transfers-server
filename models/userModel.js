import db from "../data/dbConfig.js";

const registerUser = async (user) => {
  return db("users")
    .insert(user, "id")
    .then((ids) => {
      const [id] = ids;
      return findUserBy(id);
    });
};

const findUserBy = async (filter) => {
  return db("users").where(filter).first();
};

const updateUser = async (body) => {
  const { userId, updates } = body;

  return db("users").where({ id: userId }).update(updates);
};

export default { registerUser, findUserBy, updateUser };
