exports.up = function(knex) {
    return knex.schema.createTable('otp', function(table) {
      table.increments('id');
      table.string('email').notNullable();
      table.string('otp').notNullable();
      table.timestamp('expires_at').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('otp');
  };