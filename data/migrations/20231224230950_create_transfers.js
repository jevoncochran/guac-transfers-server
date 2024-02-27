/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("transfers", (tbl) => {
    tbl.increments();

    tbl.dateTime("sent");

    tbl
      .integer("senderId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.string("senderCountry").notNullable();

    tbl.string("paymentMethod").notNullable();

    tbl.string("paymentMethodStripeId").notNullable();

    tbl.string("deliveryMethod").notNullable();

    tbl.string("institutionId").notNullable();

    tbl.string("institution").notNullable();

    tbl.string("recipientFirstName").notNullable();

    tbl.string("recipientLastName").notNullable();

    tbl.string("transferCountry").notNullable();

    tbl.string("recipientPhone").notNullable();

    tbl.string("recipientStreetAddress");

    tbl.string("recipientCity");

    tbl.string("recipientState");

    tbl.string("recipientAccountNumber");

    tbl.decimal("sendAmount", null).notNullable();

    tbl.decimal("standardFee", null).notNullable();

    // tbl.decimal("convertedAmount").notNullable();

    tbl.decimal("thirdPartyCharge", null).notNullable();

    tbl.decimal("receiveAmount", null).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transfers");
};
