import cleaner from "knex-cleaner";

export function seed(knex) {
  return cleaner.clean(knex, {
    ignoreTables: ["knex_migrations", "knex_migrations_lock"], // don't empty migration tables
  });
}
