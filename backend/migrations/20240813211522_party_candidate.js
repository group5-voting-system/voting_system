/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("party_candidate", function (table) {
    table.increments("CANDIDATE_ID"); // BIGINT primary key with auto-increment
    table.bigInteger("NATIONAL_ID").unsigned(); // BIGINT for national ID
    table.bigInteger("LIST_ID").unsigned(); // BIGINT for list ID

    // Foreign key constraints
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
    table.foreign("LIST_ID").references("LIST_ID").inTable("lists");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("party_candidate");
};
