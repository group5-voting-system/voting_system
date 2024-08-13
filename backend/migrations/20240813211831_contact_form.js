/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contact_form", function (table) {
    table.increments("id").primary(); // INT primary key with auto-increment
    table.bigInteger("national_id").unsigned(); // BIGINT for national ID
    table.string("message", 255); // VARCHAR(255) for message
    table.string("status", 255); // VARCHAR(255) for status
    table.bigInteger("admin_id").unsigned(); // BIGINT for admin ID

    // Foreign key constraints
    table.foreign("national_id").references("national_id").inTable("users");
    table.foreign("admin_id").references("admin_id").inTable("admin");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contact_form");
};
