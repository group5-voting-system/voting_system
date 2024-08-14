/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("election_advertisements", function (table) {
    table.increments("ID").primary(); // BIGINT with auto-increment as primary key
    table.bigInteger("NATIONAL_ID").notNullable(); // BIGINT for national ID
    table.bigInteger("LIST_ID"); // BIGINT for list ID
    table.integer("CIRCLE_ID"); // INT for circle ID
    table.string("TITLE", 255); // VARCHAR(255) for title
    table.text("DESCRIPTION").notNullable(); // TEXT for description (equivalent to VARCHAR(4000))
    table.text("URL").defaultTo("DUMMY DATA"); // TEXT for URL with default value
    table.string("STATUS", 255).defaultTo("PENDING"); // VARCHAR(255) for status with default value
    table.date("START_DATE"); // DATE for start date
    table.date("END_DATE"); // DATE for end date
    table.timestamp("CREATION_DATE").defaultTo(knex.fn.now()); // TIMESTAMP with default current time
    table.integer("PAYMENT_ID"); // INT for payment ID
    table.bigInteger("LIKE_COUNT").defaultTo(0); // BIGINT for like count with default value

    // Foreign key constraints
    table
      .foreign("PAYMENT_ID")
      .references("PAYMENT_ID")
      .inTable("paypal_payments");
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("circles");
    table.foreign("LIST_ID").references("LIST_ID").inTable("lists");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("election_advertisements");
};
