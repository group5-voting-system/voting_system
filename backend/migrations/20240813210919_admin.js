/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("admin", function (table) {
    table.increments("ADMIN_ID"); // AUTO_INCREMENT primary key
    table.string("NAME", 255).notNullable();
    table.string("EMAIL", 255).notNullable();
    table.string("PASSWORD", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("admin");
};
