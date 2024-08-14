/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("party_candidate", function (table) {
    table.increments("candidate_id"); // BIGINT primary key with auto-increment
    table.bigInteger("national_id").unsigned(); // BIGINT for national ID
    table.bigInteger("list_id").unsigned(); // BIGINT for list ID

    // Foreign key constraints
    table.foreign("national_id").references("national_id").inTable("users");
    table.foreign("list_id").references("list_id").inTable("lists");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("party_candidate");
};
