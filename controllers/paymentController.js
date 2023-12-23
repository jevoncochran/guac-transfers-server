const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const authService = require("../services/authService.js");

const addPaymentMethod = async (req, res) => {
  const { id } = req.params;
  const { tokenId } = req.body;

  const user = await authService.findUserBy({ id });

  try {
    const card = await stripe.customers.createSource(user.stripe_customer_id, {
      source: tokenId,
    });
    res.status(200).json({ success: true, data: card });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to add payment method" });
  }
};

module.exports = { addPaymentMethod };

