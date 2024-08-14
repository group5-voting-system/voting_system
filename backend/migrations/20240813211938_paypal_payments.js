/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("paypal_payments", function (table) {
    table.increments("payment_id").primary(); // INT primary key with auto-increment
    table.decimal("amount", 18, 2).notNullable(); // DECIMAL(18, 2) for amount
    table.bigInteger("national_id").unsigned(); // BIGINT for national ID
    table.timestamp("payment_date").defaultTo(knex.fn.now()); // TIMESTAMP with default current time
    table.string("payment_method", 50); // VARCHAR(50) for payment method
    table.string("transaction_id", 100).notNullable().unique(); // VARCHAR(100) for transaction ID with unique constraint
    table.string("status", 50).defaultTo("PENDING"); // VARCHAR(50) for status with default value

    // Foreign key constraint
    table.foreign("national_id").references("national_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("paypal_payments");
};
