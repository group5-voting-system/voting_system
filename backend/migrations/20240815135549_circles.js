/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("CIRCLES", function (table) {
    table.bigInteger("CIRCLE_ID").primary(); // BIGINT primary key for circle ID
    table.string("CIRCLE_NAME", 100); // VARCHAR(100) for circle name
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("CIRCLES"); 
};
