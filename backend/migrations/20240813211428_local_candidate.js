/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("local_candidate", function (table) {
    table.bigIncrements("candidate_id"); // BIGINT primary key with auto-increment
    table.bigInteger("national_id").unsigned(); // BIGINT for national ID
    table.bigInteger("list_id").unsigned(); // BIGINT for list ID
    table.bigInteger("count_of_votes").defaultTo(0); // BIGINT for count of votes, default 0
    table.string("type_of_chair", 100); // VARCHAR(100) for type of chair

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
  return knex.schema.dropTable("local_candidate");
};
