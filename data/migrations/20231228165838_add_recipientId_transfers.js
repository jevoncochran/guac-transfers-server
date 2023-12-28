/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("transfers", (tbl) => {
    tbl
      .integer("recipientId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("transfers", (tbl) => {
    tbl.dropColumn("recipientId");
  });
};
