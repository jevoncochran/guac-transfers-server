/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("banks").insert([
    { id: 1, name: "Bancolombia", country: "CO", isCashPickupSite: true },
    { id: 2, name: "Banco de Bogotá", country: "CO", isCashPickupSite: false },
    { id: 3, name: "Davivienda", country: "CO", isCashPickupSite: true },
    {
      id: 4,
      name: "Banco del Occidente",
      country: "CO",
      isCashPickupSite: false,
    },
    { id: 5, name: "BBVA", country: "CO", isCashPickupSite: true },

    { id: 6, name: "BBVA", country: "MX", isCashPickupSite: true },
    { id: 7, name: "Banorte", country: "MX", isCashPickupSite: true },
    { id: 8, name: "Banco Santander", country: "MX", isCashPickupSite: false },
    {
      id: 9,
      name: "Citibanamex",
      country: "MX",
      isCashPickupSite: false,
    },
    { id: 10, name: "HSBC", country: "MX", isCashPickupSite: true },
  ]);
};
