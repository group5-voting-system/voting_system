/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("debates", function (table) {
    table.increments("ID").primary(); // AUTO-INCREMENTING PRIMARY KEY
    table.date("DATE_OF_DEBATE"); // DATE for the date of debate
    table.string("TOPIC", 255); // VARCHAR(255) for topic
    table.string("FIRST_CANDIDATE", 255); // VARCHAR(255) for the first candidate
    table.string("FIRST_CANDIDATE_LIST", 255); // VARCHAR(255) for the first candidate's list
    table.string("SECOND_CANDIDATE", 255); // VARCHAR(255) for the second candidate
    table.string("SECOND_CANDIDATE_LIST", 255); // VARCHAR(255) for the second candidate's list
    table.date("START_DATE"); // DATE for start date
    table.date("END_DATE"); // DATE for end date
    table.string("STATUS", 255); // VARCHAR(255) for status
    table.text("ZOOM_LINK"); // TEXT for Zoom link
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("debates");
};
