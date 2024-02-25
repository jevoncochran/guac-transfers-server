/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("email", 50).notNullable();

    tbl.string("password").notNullable();

    tbl.string("language").notNullable();

    tbl.string("country").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
