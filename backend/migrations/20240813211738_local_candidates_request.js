/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("local_candidates_request", function (table) {
    table.increments("request_id").primary(); // INT primary key with auto-increment
    table.bigInteger("list_id").unsigned().notNullable(); // BIGINT for list ID
    table.string("city", 255).notNullable(); // VARCHAR(255) for city
    table.integer("circle_id").notNullable(); // INT for circle ID
    table.bigInteger("national_id").unsigned(); // BIGINT for national ID
    table.string("type_of_chair", 255).notNullable(); // VARCHAR(255) for type of chair
    table.string("status", 255).notNullable().defaultTo("PENDING"); // Status with default value

    // Foreign key constraints
    table.foreign("list_id").references("list_id").inTable("lists");
    table.foreign("national_id").references("national_id").inTable("users");
    table.foreign("circle_id").references("circle_id").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("local_candidates_request");
};
