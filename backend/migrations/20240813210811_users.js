/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.bigInteger("NATIONAL_ID").primary();
    table.string("FULL_NAME", 255).notNullable();
    table.string("EMAIL", 255).notNullable();
    table.string("PASSWORD", 255).defaultTo("");
    table.integer("CIRCLE_ID").notNullable();
    table.string("GENDER", 255).notNullable();
    table.string("RELIGION", 255).notNullable();
    table.date("BIRTH_DATE").notNullable();
    table.boolean("IS_LOCAL_VOTE").defaultTo(false);
    table.boolean("IS_PARTY_VOTE").defaultTo(false);
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
