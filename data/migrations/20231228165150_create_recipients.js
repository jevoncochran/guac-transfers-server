/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipients", (tbl) => {
    tbl.increments();

    tbl
      .integer("senderId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.string("firstName", 50).notNullable();

    tbl.string("lastName", 50).notNullable();

    tbl.string("deliveryMethod").notNullable();

    tbl.string("institutionId").notNullable();

    tbl.string("institution").notNullable();

    tbl.string("accountNumber");

    tbl.string("phone").notNullable();

    tbl.string("streetAddress");

    tbl.string("city");

    tbl.string("state");

    tbl.string("country").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipients");
};
