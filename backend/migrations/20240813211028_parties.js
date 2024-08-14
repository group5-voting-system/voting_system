/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("parties", function (table) {
    table.increments("PARTY_ID"); // BIGINT primary key with auto-increment
    table.string("PARTY_NAME", 100); // VARCHAR(100) for the party name
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("parties");
};
