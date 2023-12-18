/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("banks").insert([
    { id: 1, name: "Bancolombia", country: "CO" },
    { id: 2, name: "Banco de Bogotá", country: "CO" },
    { id: 3, name: "Davivienda", country: "CO" },
    { id: 4, name: "Banco del Occidente", country: "CO" },
    { id: 5, name: "BBVA", country: "CO" },
  ]);
}
