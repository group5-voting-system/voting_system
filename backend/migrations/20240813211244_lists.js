/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lists", function (table) {
    table.bigIncrements("list_id"); // BIGINT primary key with auto-increment
    table.string("list_name", 100); // VARCHAR(100) for list name
    table.bigInteger("circle_id"); // BIGINT for circle ID
    table.bigInteger("count_of_votes"); // BIGINT for count of votes
    table.enu("list_type", ["LOCAL", "PARTY"]); // ENUM for list type with values 'LOCAL' and 'PARTY'

    // Foreign key constraint
    table.foreign("circle_id").references("circle_id").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("lists");
};
