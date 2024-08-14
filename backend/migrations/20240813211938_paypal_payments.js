/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("paypal_payments", function (table) {
    table.increments("PAYMENT_ID").primary(); // INT primary key with auto-increment
    table.decimal("AMOUNT", 18, 2).notNullable(); // DECIMAL(18, 2) for amount
    table.bigInteger("NATIONAL_ID").unsigned(); // BIGINT for national ID
    table.timestamp("PAYMENT_DATE").defaultTo(knex.fn.now()); // TIMESTAMP with default current time
    table.string("PAYMENT_METHOD", 50); // VARCHAR(50) for payment method
    table.string("TRANSACTION_ID", 100).notNullable().unique(); // VARCHAR(100) for transaction ID with unique constraint
    table.string("STATUS", 50).defaultTo("PENDING"); // VARCHAR(50) for status with default value

    // Foreign key constraint
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("paypal_payments");
};
