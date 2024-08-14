/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("local_candidates_request", function (table) {
    table.increments("REQUEST_ID").primary(); // INT primary key with auto-increment
    table.bigInteger("LIST_ID").unsigned().notNullable(); // BIGINT for list ID
    table.string("CITY", 255).notNullable(); // VARCHAR(255) for city
    table.integer("CIRCLE_ID").notNullable(); // INT for circle ID
    table.bigInteger("NATIONAL_ID").unsigned(); // BIGINT for national ID
    table.string("TYPE_OF_CHAIR", 255).notNullable(); // VARCHAR(255) for type of chair
    table.string("STATUS", 255).notNullable().defaultTo("PENDING"); // Status with default value

    // Foreign key constraints
    table.foreign("LIST_ID").references("LIST_ID").inTable("lists");
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("local_candidates_request");
};
