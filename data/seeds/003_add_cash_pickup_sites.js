/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("cash_pickup_sites").insert([
    { id: 1, name: "Éxito", country: "CO" },
    { id: 2, name: "D1", country: "CO" },
    { id: 3, name: "Olímpica", country: "CO" },
  ]);
}
