/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lists", function (table) {
    table.increments("LIST_ID"); // BIGINT primary key with auto-increment
    table.string("LIST_NAME", 100); // VARCHAR(100) for list name
    table.bigInteger("CIRCLE_ID"); // BIGINT for circle ID
    table.bigInteger("COUNT_OF_VOTES"); // BIGINT for count of votes
    table.enu("LIST_TYPE", ["LOCAL", "PARTY"]); // ENUM for list type with values 'LOCAL' and 'PARTY'

    // Foreign key constraint
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("lists");
};
