/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("recipients", (tbl) => {
    tbl.dropColumn("phone");
    tbl.string("phoneIso");
    tbl.string("phoneNum");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("recipients", (tbl) => {
    tbl.dropColumn("phoneNum");
    tbl.dropColumn("phoneIso");
    tbl.string("phone");
  });
};
