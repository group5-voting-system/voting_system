/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("election_advertisements", function (table) {
    table.bigIncrements("id").primary(); // BIGINT with auto-increment as primary key
    table.bigInteger("national_id").notNullable(); // BIGINT for national ID
    table.bigInteger("list_id"); // BIGINT for list ID
    table.integer("circle_id"); // INT for circle ID
    table.string("title", 255); // VARCHAR(255) for title
    table.text("description").notNullable(); // TEXT for description (equivalent to VARCHAR(4000))
    table.text("url").defaultTo("DUMMY DATA"); // TEXT for URL with default value
    table.string("status", 255).defaultTo("PENDING"); // VARCHAR(255) for status with default value
    table.date("start_date"); // DATE for start date
    table.date("end_date"); // DATE for end date
    table.timestamp("creation_date").defaultTo(knex.fn.now()); // TIMESTAMP with default current time
    table.integer("payment_id"); // INT for payment ID
    table.bigInteger("like_count").defaultTo(0); // BIGINT for like count with default value

    // Foreign key constraints
    table
      .foreign("payment_id")
      .references("payment_id")
      .inTable("paypal_payments");
    table.foreign("national_id").references("national_id").inTable("users");
    table.foreign("circle_id").references("circle_id").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("election_advertisements");
};
