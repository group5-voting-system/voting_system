/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contact_form", function (table) {
    table.increments("ID").primary(); // INT primary key with auto-increment
    table.bigInteger("NATIONAL_ID").unsigned(); // BIGINT for national ID
    table.string("MESSAGE", 255); // VARCHAR(255) for message
    table.string("STATUS", 255); // VARCHAR(255) for status
    table.bigInteger("ADMIN_ID").unsigned(); // BIGINT for admin ID

    // Foreign key constraints
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
    table.foreign("ADMIN_ID").references("ADMIN_ID").inTable("admin");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contact_form");
};
