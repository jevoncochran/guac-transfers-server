import knex from "knex";

import config from "../knexfile.js";

const env = process.env.DB_ENV || "development";

export default knex(config[env]);
