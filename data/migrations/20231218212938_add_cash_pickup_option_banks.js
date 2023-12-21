/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("banks", (tbl) => {
    tbl.boolean("isCashPickupSite");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("banks", (tbl) => {
    tbl.dropColumn("isCashPickupSite");
  });
}
