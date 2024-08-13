/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("debates", function (table) {
    table.increments("id").primary(); // AUTO-INCREMENTING PRIMARY KEY
    table.date("date_of_debate"); // DATE for the date of debate
    table.string("topic", 255); // VARCHAR(255) for topic
    table.string("first_candidate", 255); // VARCHAR(255) for the first candidate
    table.string("first_candidate_list", 255); // VARCHAR(255) for the first candidate's list
    table.string("second_candidate", 255); // VARCHAR(255) for the second candidate
    table.string("second_candidate_list", 255); // VARCHAR(255) for the second candidate's list
    table.string("status", 255); // VARCHAR(255) for status
    table.text("zoom_link"); // TEXT for Zoom link
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("debates");
};
