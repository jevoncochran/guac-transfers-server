const bcrypt = require("bcryptjs");
const Users = require("../models/userModel.js");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const registerUser = async (user) => {
  let { firstName, lastName, email, password, language, country } = user;
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  // TODO: Only do this after user is successfully created
  // Create Stripe customer
  const stripeCustomer = await stripe.customers.create({
    name: `${firstName} ${lastName}`,
    email,
  });

  return Users.registerUser({
    firstName,
    lastName,
    email,
    password,
    stripe_customer_id: stripeCustomer.id,
    language,
    country,
  });
};

const findUserBy = async (filter) => {
  console.log("THIS IS WORKING");
  return Users.findUserBy(filter);
};

module.exports = { registerUser, findUserBy };
