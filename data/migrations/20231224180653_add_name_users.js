/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("users", (tbl) => {
    tbl.string("firstName", 50).notNullable();

    tbl.string("lastName", 50).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("users", (tbl) => {
    tbl.dropColumn("firstName");
    tbl.dropColumn("lastName");
  });
};
