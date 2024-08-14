/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("party_members", function (table) {
    table.increments("MEMBER_ID"); // BIGINT primary key with auto-increment
    table.bigInteger("NATIONAL_ID").notNullable(); // BIGINT for national ID
    table.bigInteger("PARTY_ID").notNullable(); // BIGINT for party ID
    table.boolean("IS_PARTY_COMMISSIONER").defaultTo(false); // BOOLEAN for party commissioner with default value FALSE

    // Foreign key constraints
    table.foreign("PARTY_ID").references("PARTY_ID").inTable("parties");
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("party_members");
};
