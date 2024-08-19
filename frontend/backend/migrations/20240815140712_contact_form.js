/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("CONTACT_FORM", function (table) {
    table.increments("ID").primary(); // INT IDENTITY(1,1) primary key for ID
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.string("MESSAGE", 255); // VARCHAR(255) for message
    table.string("STATUS", 255); // VARCHAR(255) for status
    table.bigInteger("ADMIN_ID"); // BIGINT for admin ID

    // Foreign key constraints
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
    table.foreign("ADMIN_ID").references("ADMIN_ID").inTable("ADMIN"); // Foreign key referencing ADMIN_ID in ADMIN table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("CONTACT_FORM"); // Drop the CONTACT_FORM table if it exists
};
