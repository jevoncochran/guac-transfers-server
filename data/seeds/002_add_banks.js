/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("banks").insert([
    // Colombian Banks
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

    // Mexican Banks
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

    // Brazilian Banks
    { id: 11, name: "Banco do Brasil", country: "BR", isCashPickupSite: false },
    { id: 12, name: "Itaú Unibanco", country: "BR", isCashPickupSite: false },
    { id: 13, name: "Banco Santander", country: "BR", isCashPickupSite: false },
    { id: 14, name: "Banco Bradesco", country: "BR", isCashPickupSite: true },
    {
      id: 15,
      name: "Caixa Econômica Federal",
      country: "BR",
      isCashPickupSite: true,
    },

    // Indian Banks
    {
      id: 16,
      name: "State Bank of India",
      country: "IN",
      isCashPickupSite: true,
    },
    {
      id: 17,
      name: "Bank of Baroda",
      country: "IN",
      isCashPickupSite: false,
    },
    {
      id: 18,
      name: "Canara Bank",
      country: "IN",
      isCashPickupSite: true,
    },
    {
      id: 19,
      name: "Punjab National Bank",
      country: "IN",
      isCashPickupSite: true,
    },
  ]);
};
