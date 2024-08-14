/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("party_members", function (table) {
    table.increments("member_id"); // BIGINT primary key with auto-increment
    table.bigInteger("national_id").notNullable(); // BIGINT for national ID
    table.bigInteger("party_id").notNullable(); // BIGINT for party ID
    table.boolean("is_party_commissioner").defaultTo(false); // BOOLEAN for party commissioner with default value FALSE

    // Foreign key constraints
    table.foreign("party_id").references("party_id").inTable("parties");
    table.foreign("national_id").references("national_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("party_members");
};
