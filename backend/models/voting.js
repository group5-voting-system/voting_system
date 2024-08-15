const knex = require('../db/knex');

class Voter {
  static getAll() {
    return knex('users').select('*');
  }

  static getById(id) {
    return knex('users').where('NATIONAL_ID', id).first();
  }

  static create(voterData) {
    return knex('users').insert(voterData).returning('*');
  }
  
  static update(id, voterData) {
   return knex('users').where('NATIONAL_ID', id).update(voterData).returning('*'); 
  }
  static delete(id) {
    return knex('users').where('NATIONAL_ID', id).del();
  }
}

module.exports = Voter;








