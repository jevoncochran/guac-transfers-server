/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("cash_pickup_sites").insert([
    { id: 1, name: "Éxito", country: "CO" },
    { id: 2, name: "D1", country: "CO" },
    { id: 3, name: "Olímpica", country: "CO" },
    { id: 4, name: "711", country: "MX" },
    { id: 5, name: "Western Union", country: "MX" },
    { id: 6, name: "Money Gram", country: "MX" },
  ]);
};
