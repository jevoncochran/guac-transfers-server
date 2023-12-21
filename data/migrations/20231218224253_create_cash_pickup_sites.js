/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("cash_pickup_sites", (tbl) => {
    tbl.increments();

    tbl.string("name").notNullable();

    tbl.string("country").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("cash_pickup_sites");
}
