// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// This example sets up an endpoint using the Express framework.
// To learn more about Express, watch this video: https://youtu.be/rPR2aJ6XnAc.
// const express = require('express');
// const app = express();

// const stripe = require('stripe')('sk_test_51OPZTnAeBM4XCpn0K2kieFUnTKxdSMs6mSg0E9j75BYafMxQDBEFhZWo17ZW76AyRmbt3Rr7vLCpjT6dJJQIZ7J30052ZHUW3N');

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     mode: 'setup',
//     ui_mode: 'embedded',
//     return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
//   });

//   res.send({clientSecret: session.client_secret});
// });
const stripe = require("stripe");

// const stripe = stripe(process.env.STRIPE_SECRET_KEY);

// const addPaymentMethod = async (req, res) => {
//   const session = await
// };
