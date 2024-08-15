/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("LOCAL_LISTS", function (table) {
    table.bigInteger("LIST_ID").primary(); // BIGINT primary key for list ID
    table.string("LIST_NAME", 100); // VARCHAR(100) for list name
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.bigInteger("CIRCLE_ID"); // BIGINT for circle ID
    table.bigInteger("COUNT_OF_VOTES").defaultTo(0); // BIGINT with default value 0 for count of votes
    table.boolean("IS_APROVED").defaultTo(false); // BOOLEAN with default value FALSE for approved status
    table.string("TYPE_OF_CHAIR", 100); // VARCHAR(100) for type of chair

    // Foreign key constraints
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("CIRCLES"); // Foreign key referencing CIRCLE_ID in CIRCLES table
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("LOCAL_LISTS"); // Drop the LOCAL_LISTS table if it exists
};
