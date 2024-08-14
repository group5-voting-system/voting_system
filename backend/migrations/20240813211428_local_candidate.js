/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("local_candidate", function (table) {
    table.increments("CANDIDATE_ID"); // BIGINT primary key with auto-increment
    table.bigInteger("NATIONAL_ID").unsigned(); // BIGINT for national ID
    table.bigInteger("LIST_ID").unsigned(); // BIGINT for list ID
    table.bigInteger("COUNT_OF_VOTES").defaultTo(0); // BIGINT for count of votes, default 0
    table.string("TYPE_OF_CHAIR", 100); // VARCHAR(100) for type of chair

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
  return knex.schema.dropTable("local_candidate");
};
