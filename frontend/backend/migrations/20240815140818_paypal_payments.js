/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PAYPAL_PAYMENTS", function (table) {
    table.increments("PAYMENT_ID").primary(); // INT IDENTITY(1,1) primary key for payment ID
    table.decimal("AMOUNT", 18, 2).notNullable(); // DECIMAL(18, 2) for amount
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.timestamp("PAYMENT_DATE").defaultTo(knex.fn.now()); // DATETIME with default value CURRENT_TIMESTAMP()
    table.string("PAYMENT_METHOD", 50); // VARCHAR(50) for payment method
    table.string("TRANSACTION_ID", 100).unique().notNullable(); // VARCHAR(100) unique and not null for transaction ID
    table.string("STATUS", 50).defaultTo("PENDING"); // VARCHAR(50) with default value 'PENDING' for status

    // Foreign key constraint
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PAYPAL_PAYMENTS"); // Drop the PAYPAL_PAYMENTS table if it exists
};
