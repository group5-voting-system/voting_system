/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.bigInteger("national_id").primary();
    table.string("full_name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255);
    table.integer("circle_id").notNullable();
    table.string("gender", 255).notNullable();
    table.string("religion", 255).notNullable();
    table.date("birth_date").notNullable();
    table.boolean("is_local_vote").defaultTo(false);
    table.boolean("is_party_vote").defaultTo(false);

    table.foreign("circle_id").references("circle_id").inTable("circles");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
