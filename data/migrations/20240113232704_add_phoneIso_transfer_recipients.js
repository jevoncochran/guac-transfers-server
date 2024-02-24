/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("transfers", (tbl) => {
    tbl.dropColumn("recipientPhone");
    tbl.string("recipientPhoneIso");
    tbl.string("recipientPhoneNum");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("transfers", (tbl) => {
    tbl.dropColumn("recipientPhoneNum");
    tbl.dropColumn("recipientPhoneIso");
    tbl.string("recipientPhone");
  });
};
